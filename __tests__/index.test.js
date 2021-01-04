const postcss = require("postcss");
const tailwindcss = require("tailwindcss");
const plugin = require("../src/index");
const snapshotDiff = require("snapshot-diff");

const defaultConfig = {
  theme: {
    listMarkerColor: {
      black: "#000",
      white: "#fff",
    },
  },
  variants: {
    listMarkerColor: [],
  },
};

function run(config) {
  return postcss([
    tailwindcss({ ...config, corePlugins: [], plugins: [plugin] }),
  ])
    .process(
      [
        "@tailwind base;",
        "@tailwind components;",
        "@tailwind utilities;",
        "@tailwind screens;",
      ].join("\n"),
      { from: undefined }
    )
    .then((result) => result.css);
}

async function diffOnly(config) {
  const [before, after] = await Promise.all([run(defaultConfig), run(config)]);

  return `\n\n${snapshotDiff(before, after, {
    aAnnotation: "__REMOVE_ME__",
    bAnnotation: "__REMOVE_ME__",
    contextLines: 0,
  })
    .replace(/\n\n@@([^@@]*)@@/g, "") // Top level @@ signs
    .replace(/@@([^@@]*)@@/g, "\n---\n") // In between @@ signs
    .replace(/[-+] __REMOVE_ME__\n/g, "")
    .replace(/Snapshot Diff:\n/g, "")
    .replace(/"/g, "'")
    .split("\n")
    .map((line) => `${line}`)
    .join("\n")}\n\n`;
}

it("should generate default classes for the marker components", async () => {
  expect(await run(defaultConfig)).toMatchInlineSnapshot(`""`);
});

it("should be possible to reduce the colors to certain values", async () => {
  expect(
    await diffOnly({
      theme: {
        listMarkerColor: {
          black: "#000",
        },
      },
      variants: {
        listMarkerColor: [],
      },
    })
  ).toMatchInlineSnapshot(`
    "

    Compared values have no visual difference.

    "
  `);
});

it("should be possible to extend the screens to certain values", async () => {
  expect(
    await diffOnly({
      theme: {
        screens: {
          sm: "600px",
        },
        listMarkerColor: {
          black: "#000",
          white: "#fff",
        },
      },
      variants: {
        listMarkerColor: ["responsive"],
      },
    })
  ).toMatchInlineSnapshot(`
    "

    Compared values have no visual difference.

    "
  `);
});
