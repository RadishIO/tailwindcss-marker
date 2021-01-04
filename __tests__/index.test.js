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
  expect(await run(defaultConfig)).toMatchInlineSnapshot(`
    ".list-marker-black > ::marker {
      color: #000
    }

    .list-marker-white > ::marker {
      color: #fff
    }

    .marker-current::-webkit-details-marker, .marker-current::marker {
      color: currentColor
    }

    .marker-black::-webkit-details-marker, .marker-black::marker {
      color: #000
    }

    .marker-white::-webkit-details-marker, .marker-white::marker {
      color: #fff
    }

    .marker-gray-50::-webkit-details-marker, .marker-gray-50::marker {
      color: #f9fafb
    }

    .marker-gray-100::-webkit-details-marker, .marker-gray-100::marker {
      color: #f3f4f6
    }

    .marker-gray-200::-webkit-details-marker, .marker-gray-200::marker {
      color: #e5e7eb
    }

    .marker-gray-300::-webkit-details-marker, .marker-gray-300::marker {
      color: #d1d5db
    }

    .marker-gray-400::-webkit-details-marker, .marker-gray-400::marker {
      color: #9ca3af
    }

    .marker-gray-500::-webkit-details-marker, .marker-gray-500::marker {
      color: #6b7280
    }

    .marker-gray-600::-webkit-details-marker, .marker-gray-600::marker {
      color: #4b5563
    }

    .marker-gray-700::-webkit-details-marker, .marker-gray-700::marker {
      color: #374151
    }

    .marker-gray-800::-webkit-details-marker, .marker-gray-800::marker {
      color: #1f2937
    }

    .marker-gray-900::-webkit-details-marker, .marker-gray-900::marker {
      color: #111827
    }

    .marker-red-50::-webkit-details-marker, .marker-red-50::marker {
      color: #fef2f2
    }

    .marker-red-100::-webkit-details-marker, .marker-red-100::marker {
      color: #fee2e2
    }

    .marker-red-200::-webkit-details-marker, .marker-red-200::marker {
      color: #fecaca
    }

    .marker-red-300::-webkit-details-marker, .marker-red-300::marker {
      color: #fca5a5
    }

    .marker-red-400::-webkit-details-marker, .marker-red-400::marker {
      color: #f87171
    }

    .marker-red-500::-webkit-details-marker, .marker-red-500::marker {
      color: #ef4444
    }

    .marker-red-600::-webkit-details-marker, .marker-red-600::marker {
      color: #dc2626
    }

    .marker-red-700::-webkit-details-marker, .marker-red-700::marker {
      color: #b91c1c
    }

    .marker-red-800::-webkit-details-marker, .marker-red-800::marker {
      color: #991b1b
    }

    .marker-red-900::-webkit-details-marker, .marker-red-900::marker {
      color: #7f1d1d
    }

    .marker-yellow-50::-webkit-details-marker, .marker-yellow-50::marker {
      color: #fffbeb
    }

    .marker-yellow-100::-webkit-details-marker, .marker-yellow-100::marker {
      color: #fef3c7
    }

    .marker-yellow-200::-webkit-details-marker, .marker-yellow-200::marker {
      color: #fde68a
    }

    .marker-yellow-300::-webkit-details-marker, .marker-yellow-300::marker {
      color: #fcd34d
    }

    .marker-yellow-400::-webkit-details-marker, .marker-yellow-400::marker {
      color: #fbbf24
    }

    .marker-yellow-500::-webkit-details-marker, .marker-yellow-500::marker {
      color: #f59e0b
    }

    .marker-yellow-600::-webkit-details-marker, .marker-yellow-600::marker {
      color: #d97706
    }

    .marker-yellow-700::-webkit-details-marker, .marker-yellow-700::marker {
      color: #b45309
    }

    .marker-yellow-800::-webkit-details-marker, .marker-yellow-800::marker {
      color: #92400e
    }

    .marker-yellow-900::-webkit-details-marker, .marker-yellow-900::marker {
      color: #78350f
    }

    .marker-green-50::-webkit-details-marker, .marker-green-50::marker {
      color: #ecfdf5
    }

    .marker-green-100::-webkit-details-marker, .marker-green-100::marker {
      color: #d1fae5
    }

    .marker-green-200::-webkit-details-marker, .marker-green-200::marker {
      color: #a7f3d0
    }

    .marker-green-300::-webkit-details-marker, .marker-green-300::marker {
      color: #6ee7b7
    }

    .marker-green-400::-webkit-details-marker, .marker-green-400::marker {
      color: #34d399
    }

    .marker-green-500::-webkit-details-marker, .marker-green-500::marker {
      color: #10b981
    }

    .marker-green-600::-webkit-details-marker, .marker-green-600::marker {
      color: #059669
    }

    .marker-green-700::-webkit-details-marker, .marker-green-700::marker {
      color: #047857
    }

    .marker-green-800::-webkit-details-marker, .marker-green-800::marker {
      color: #065f46
    }

    .marker-green-900::-webkit-details-marker, .marker-green-900::marker {
      color: #064e3b
    }

    .marker-blue-50::-webkit-details-marker, .marker-blue-50::marker {
      color: #eff6ff
    }

    .marker-blue-100::-webkit-details-marker, .marker-blue-100::marker {
      color: #dbeafe
    }

    .marker-blue-200::-webkit-details-marker, .marker-blue-200::marker {
      color: #bfdbfe
    }

    .marker-blue-300::-webkit-details-marker, .marker-blue-300::marker {
      color: #93c5fd
    }

    .marker-blue-400::-webkit-details-marker, .marker-blue-400::marker {
      color: #60a5fa
    }

    .marker-blue-500::-webkit-details-marker, .marker-blue-500::marker {
      color: #3b82f6
    }

    .marker-blue-600::-webkit-details-marker, .marker-blue-600::marker {
      color: #2563eb
    }

    .marker-blue-700::-webkit-details-marker, .marker-blue-700::marker {
      color: #1d4ed8
    }

    .marker-blue-800::-webkit-details-marker, .marker-blue-800::marker {
      color: #1e40af
    }

    .marker-blue-900::-webkit-details-marker, .marker-blue-900::marker {
      color: #1e3a8a
    }

    .marker-indigo-50::-webkit-details-marker, .marker-indigo-50::marker {
      color: #eef2ff
    }

    .marker-indigo-100::-webkit-details-marker, .marker-indigo-100::marker {
      color: #e0e7ff
    }

    .marker-indigo-200::-webkit-details-marker, .marker-indigo-200::marker {
      color: #c7d2fe
    }

    .marker-indigo-300::-webkit-details-marker, .marker-indigo-300::marker {
      color: #a5b4fc
    }

    .marker-indigo-400::-webkit-details-marker, .marker-indigo-400::marker {
      color: #818cf8
    }

    .marker-indigo-500::-webkit-details-marker, .marker-indigo-500::marker {
      color: #6366f1
    }

    .marker-indigo-600::-webkit-details-marker, .marker-indigo-600::marker {
      color: #4f46e5
    }

    .marker-indigo-700::-webkit-details-marker, .marker-indigo-700::marker {
      color: #4338ca
    }

    .marker-indigo-800::-webkit-details-marker, .marker-indigo-800::marker {
      color: #3730a3
    }

    .marker-indigo-900::-webkit-details-marker, .marker-indigo-900::marker {
      color: #312e81
    }

    .marker-purple-50::-webkit-details-marker, .marker-purple-50::marker {
      color: #f5f3ff
    }

    .marker-purple-100::-webkit-details-marker, .marker-purple-100::marker {
      color: #ede9fe
    }

    .marker-purple-200::-webkit-details-marker, .marker-purple-200::marker {
      color: #ddd6fe
    }

    .marker-purple-300::-webkit-details-marker, .marker-purple-300::marker {
      color: #c4b5fd
    }

    .marker-purple-400::-webkit-details-marker, .marker-purple-400::marker {
      color: #a78bfa
    }

    .marker-purple-500::-webkit-details-marker, .marker-purple-500::marker {
      color: #8b5cf6
    }

    .marker-purple-600::-webkit-details-marker, .marker-purple-600::marker {
      color: #7c3aed
    }

    .marker-purple-700::-webkit-details-marker, .marker-purple-700::marker {
      color: #6d28d9
    }

    .marker-purple-800::-webkit-details-marker, .marker-purple-800::marker {
      color: #5b21b6
    }

    .marker-purple-900::-webkit-details-marker, .marker-purple-900::marker {
      color: #4c1d95
    }

    .marker-pink-50::-webkit-details-marker, .marker-pink-50::marker {
      color: #fdf2f8
    }

    .marker-pink-100::-webkit-details-marker, .marker-pink-100::marker {
      color: #fce7f3
    }

    .marker-pink-200::-webkit-details-marker, .marker-pink-200::marker {
      color: #fbcfe8
    }

    .marker-pink-300::-webkit-details-marker, .marker-pink-300::marker {
      color: #f9a8d4
    }

    .marker-pink-400::-webkit-details-marker, .marker-pink-400::marker {
      color: #f472b6
    }

    .marker-pink-500::-webkit-details-marker, .marker-pink-500::marker {
      color: #ec4899
    }

    .marker-pink-600::-webkit-details-marker, .marker-pink-600::marker {
      color: #db2777
    }

    .marker-pink-700::-webkit-details-marker, .marker-pink-700::marker {
      color: #be185d
    }

    .marker-pink-800::-webkit-details-marker, .marker-pink-800::marker {
      color: #9d174d
    }

    .marker-pink-900::-webkit-details-marker, .marker-pink-900::marker {
      color: #831843
    }

    @media (min-width: 640px) {
      .sm\\\\:marker-current::-webkit-details-marker, .sm\\\\:marker-current::marker {
        color: currentColor
      }

      .sm\\\\:marker-black::-webkit-details-marker, .sm\\\\:marker-black::marker {
        color: #000
      }

      .sm\\\\:marker-white::-webkit-details-marker, .sm\\\\:marker-white::marker {
        color: #fff
      }

      .sm\\\\:marker-gray-50::-webkit-details-marker, .sm\\\\:marker-gray-50::marker {
        color: #f9fafb
      }

      .sm\\\\:marker-gray-100::-webkit-details-marker, .sm\\\\:marker-gray-100::marker {
        color: #f3f4f6
      }

      .sm\\\\:marker-gray-200::-webkit-details-marker, .sm\\\\:marker-gray-200::marker {
        color: #e5e7eb
      }

      .sm\\\\:marker-gray-300::-webkit-details-marker, .sm\\\\:marker-gray-300::marker {
        color: #d1d5db
      }

      .sm\\\\:marker-gray-400::-webkit-details-marker, .sm\\\\:marker-gray-400::marker {
        color: #9ca3af
      }

      .sm\\\\:marker-gray-500::-webkit-details-marker, .sm\\\\:marker-gray-500::marker {
        color: #6b7280
      }

      .sm\\\\:marker-gray-600::-webkit-details-marker, .sm\\\\:marker-gray-600::marker {
        color: #4b5563
      }

      .sm\\\\:marker-gray-700::-webkit-details-marker, .sm\\\\:marker-gray-700::marker {
        color: #374151
      }

      .sm\\\\:marker-gray-800::-webkit-details-marker, .sm\\\\:marker-gray-800::marker {
        color: #1f2937
      }

      .sm\\\\:marker-gray-900::-webkit-details-marker, .sm\\\\:marker-gray-900::marker {
        color: #111827
      }

      .sm\\\\:marker-red-50::-webkit-details-marker, .sm\\\\:marker-red-50::marker {
        color: #fef2f2
      }

      .sm\\\\:marker-red-100::-webkit-details-marker, .sm\\\\:marker-red-100::marker {
        color: #fee2e2
      }

      .sm\\\\:marker-red-200::-webkit-details-marker, .sm\\\\:marker-red-200::marker {
        color: #fecaca
      }

      .sm\\\\:marker-red-300::-webkit-details-marker, .sm\\\\:marker-red-300::marker {
        color: #fca5a5
      }

      .sm\\\\:marker-red-400::-webkit-details-marker, .sm\\\\:marker-red-400::marker {
        color: #f87171
      }

      .sm\\\\:marker-red-500::-webkit-details-marker, .sm\\\\:marker-red-500::marker {
        color: #ef4444
      }

      .sm\\\\:marker-red-600::-webkit-details-marker, .sm\\\\:marker-red-600::marker {
        color: #dc2626
      }

      .sm\\\\:marker-red-700::-webkit-details-marker, .sm\\\\:marker-red-700::marker {
        color: #b91c1c
      }

      .sm\\\\:marker-red-800::-webkit-details-marker, .sm\\\\:marker-red-800::marker {
        color: #991b1b
      }

      .sm\\\\:marker-red-900::-webkit-details-marker, .sm\\\\:marker-red-900::marker {
        color: #7f1d1d
      }

      .sm\\\\:marker-yellow-50::-webkit-details-marker, .sm\\\\:marker-yellow-50::marker {
        color: #fffbeb
      }

      .sm\\\\:marker-yellow-100::-webkit-details-marker, .sm\\\\:marker-yellow-100::marker {
        color: #fef3c7
      }

      .sm\\\\:marker-yellow-200::-webkit-details-marker, .sm\\\\:marker-yellow-200::marker {
        color: #fde68a
      }

      .sm\\\\:marker-yellow-300::-webkit-details-marker, .sm\\\\:marker-yellow-300::marker {
        color: #fcd34d
      }

      .sm\\\\:marker-yellow-400::-webkit-details-marker, .sm\\\\:marker-yellow-400::marker {
        color: #fbbf24
      }

      .sm\\\\:marker-yellow-500::-webkit-details-marker, .sm\\\\:marker-yellow-500::marker {
        color: #f59e0b
      }

      .sm\\\\:marker-yellow-600::-webkit-details-marker, .sm\\\\:marker-yellow-600::marker {
        color: #d97706
      }

      .sm\\\\:marker-yellow-700::-webkit-details-marker, .sm\\\\:marker-yellow-700::marker {
        color: #b45309
      }

      .sm\\\\:marker-yellow-800::-webkit-details-marker, .sm\\\\:marker-yellow-800::marker {
        color: #92400e
      }

      .sm\\\\:marker-yellow-900::-webkit-details-marker, .sm\\\\:marker-yellow-900::marker {
        color: #78350f
      }

      .sm\\\\:marker-green-50::-webkit-details-marker, .sm\\\\:marker-green-50::marker {
        color: #ecfdf5
      }

      .sm\\\\:marker-green-100::-webkit-details-marker, .sm\\\\:marker-green-100::marker {
        color: #d1fae5
      }

      .sm\\\\:marker-green-200::-webkit-details-marker, .sm\\\\:marker-green-200::marker {
        color: #a7f3d0
      }

      .sm\\\\:marker-green-300::-webkit-details-marker, .sm\\\\:marker-green-300::marker {
        color: #6ee7b7
      }

      .sm\\\\:marker-green-400::-webkit-details-marker, .sm\\\\:marker-green-400::marker {
        color: #34d399
      }

      .sm\\\\:marker-green-500::-webkit-details-marker, .sm\\\\:marker-green-500::marker {
        color: #10b981
      }

      .sm\\\\:marker-green-600::-webkit-details-marker, .sm\\\\:marker-green-600::marker {
        color: #059669
      }

      .sm\\\\:marker-green-700::-webkit-details-marker, .sm\\\\:marker-green-700::marker {
        color: #047857
      }

      .sm\\\\:marker-green-800::-webkit-details-marker, .sm\\\\:marker-green-800::marker {
        color: #065f46
      }

      .sm\\\\:marker-green-900::-webkit-details-marker, .sm\\\\:marker-green-900::marker {
        color: #064e3b
      }

      .sm\\\\:marker-blue-50::-webkit-details-marker, .sm\\\\:marker-blue-50::marker {
        color: #eff6ff
      }

      .sm\\\\:marker-blue-100::-webkit-details-marker, .sm\\\\:marker-blue-100::marker {
        color: #dbeafe
      }

      .sm\\\\:marker-blue-200::-webkit-details-marker, .sm\\\\:marker-blue-200::marker {
        color: #bfdbfe
      }

      .sm\\\\:marker-blue-300::-webkit-details-marker, .sm\\\\:marker-blue-300::marker {
        color: #93c5fd
      }

      .sm\\\\:marker-blue-400::-webkit-details-marker, .sm\\\\:marker-blue-400::marker {
        color: #60a5fa
      }

      .sm\\\\:marker-blue-500::-webkit-details-marker, .sm\\\\:marker-blue-500::marker {
        color: #3b82f6
      }

      .sm\\\\:marker-blue-600::-webkit-details-marker, .sm\\\\:marker-blue-600::marker {
        color: #2563eb
      }

      .sm\\\\:marker-blue-700::-webkit-details-marker, .sm\\\\:marker-blue-700::marker {
        color: #1d4ed8
      }

      .sm\\\\:marker-blue-800::-webkit-details-marker, .sm\\\\:marker-blue-800::marker {
        color: #1e40af
      }

      .sm\\\\:marker-blue-900::-webkit-details-marker, .sm\\\\:marker-blue-900::marker {
        color: #1e3a8a
      }

      .sm\\\\:marker-indigo-50::-webkit-details-marker, .sm\\\\:marker-indigo-50::marker {
        color: #eef2ff
      }

      .sm\\\\:marker-indigo-100::-webkit-details-marker, .sm\\\\:marker-indigo-100::marker {
        color: #e0e7ff
      }

      .sm\\\\:marker-indigo-200::-webkit-details-marker, .sm\\\\:marker-indigo-200::marker {
        color: #c7d2fe
      }

      .sm\\\\:marker-indigo-300::-webkit-details-marker, .sm\\\\:marker-indigo-300::marker {
        color: #a5b4fc
      }

      .sm\\\\:marker-indigo-400::-webkit-details-marker, .sm\\\\:marker-indigo-400::marker {
        color: #818cf8
      }

      .sm\\\\:marker-indigo-500::-webkit-details-marker, .sm\\\\:marker-indigo-500::marker {
        color: #6366f1
      }

      .sm\\\\:marker-indigo-600::-webkit-details-marker, .sm\\\\:marker-indigo-600::marker {
        color: #4f46e5
      }

      .sm\\\\:marker-indigo-700::-webkit-details-marker, .sm\\\\:marker-indigo-700::marker {
        color: #4338ca
      }

      .sm\\\\:marker-indigo-800::-webkit-details-marker, .sm\\\\:marker-indigo-800::marker {
        color: #3730a3
      }

      .sm\\\\:marker-indigo-900::-webkit-details-marker, .sm\\\\:marker-indigo-900::marker {
        color: #312e81
      }

      .sm\\\\:marker-purple-50::-webkit-details-marker, .sm\\\\:marker-purple-50::marker {
        color: #f5f3ff
      }

      .sm\\\\:marker-purple-100::-webkit-details-marker, .sm\\\\:marker-purple-100::marker {
        color: #ede9fe
      }

      .sm\\\\:marker-purple-200::-webkit-details-marker, .sm\\\\:marker-purple-200::marker {
        color: #ddd6fe
      }

      .sm\\\\:marker-purple-300::-webkit-details-marker, .sm\\\\:marker-purple-300::marker {
        color: #c4b5fd
      }

      .sm\\\\:marker-purple-400::-webkit-details-marker, .sm\\\\:marker-purple-400::marker {
        color: #a78bfa
      }

      .sm\\\\:marker-purple-500::-webkit-details-marker, .sm\\\\:marker-purple-500::marker {
        color: #8b5cf6
      }

      .sm\\\\:marker-purple-600::-webkit-details-marker, .sm\\\\:marker-purple-600::marker {
        color: #7c3aed
      }

      .sm\\\\:marker-purple-700::-webkit-details-marker, .sm\\\\:marker-purple-700::marker {
        color: #6d28d9
      }

      .sm\\\\:marker-purple-800::-webkit-details-marker, .sm\\\\:marker-purple-800::marker {
        color: #5b21b6
      }

      .sm\\\\:marker-purple-900::-webkit-details-marker, .sm\\\\:marker-purple-900::marker {
        color: #4c1d95
      }

      .sm\\\\:marker-pink-50::-webkit-details-marker, .sm\\\\:marker-pink-50::marker {
        color: #fdf2f8
      }

      .sm\\\\:marker-pink-100::-webkit-details-marker, .sm\\\\:marker-pink-100::marker {
        color: #fce7f3
      }

      .sm\\\\:marker-pink-200::-webkit-details-marker, .sm\\\\:marker-pink-200::marker {
        color: #fbcfe8
      }

      .sm\\\\:marker-pink-300::-webkit-details-marker, .sm\\\\:marker-pink-300::marker {
        color: #f9a8d4
      }

      .sm\\\\:marker-pink-400::-webkit-details-marker, .sm\\\\:marker-pink-400::marker {
        color: #f472b6
      }

      .sm\\\\:marker-pink-500::-webkit-details-marker, .sm\\\\:marker-pink-500::marker {
        color: #ec4899
      }

      .sm\\\\:marker-pink-600::-webkit-details-marker, .sm\\\\:marker-pink-600::marker {
        color: #db2777
      }

      .sm\\\\:marker-pink-700::-webkit-details-marker, .sm\\\\:marker-pink-700::marker {
        color: #be185d
      }

      .sm\\\\:marker-pink-800::-webkit-details-marker, .sm\\\\:marker-pink-800::marker {
        color: #9d174d
      }

      .sm\\\\:marker-pink-900::-webkit-details-marker, .sm\\\\:marker-pink-900::marker {
        color: #831843
      }
    }

    @media (min-width: 768px) {
      .md\\\\:marker-current::-webkit-details-marker, .md\\\\:marker-current::marker {
        color: currentColor
      }

      .md\\\\:marker-black::-webkit-details-marker, .md\\\\:marker-black::marker {
        color: #000
      }

      .md\\\\:marker-white::-webkit-details-marker, .md\\\\:marker-white::marker {
        color: #fff
      }

      .md\\\\:marker-gray-50::-webkit-details-marker, .md\\\\:marker-gray-50::marker {
        color: #f9fafb
      }

      .md\\\\:marker-gray-100::-webkit-details-marker, .md\\\\:marker-gray-100::marker {
        color: #f3f4f6
      }

      .md\\\\:marker-gray-200::-webkit-details-marker, .md\\\\:marker-gray-200::marker {
        color: #e5e7eb
      }

      .md\\\\:marker-gray-300::-webkit-details-marker, .md\\\\:marker-gray-300::marker {
        color: #d1d5db
      }

      .md\\\\:marker-gray-400::-webkit-details-marker, .md\\\\:marker-gray-400::marker {
        color: #9ca3af
      }

      .md\\\\:marker-gray-500::-webkit-details-marker, .md\\\\:marker-gray-500::marker {
        color: #6b7280
      }

      .md\\\\:marker-gray-600::-webkit-details-marker, .md\\\\:marker-gray-600::marker {
        color: #4b5563
      }

      .md\\\\:marker-gray-700::-webkit-details-marker, .md\\\\:marker-gray-700::marker {
        color: #374151
      }

      .md\\\\:marker-gray-800::-webkit-details-marker, .md\\\\:marker-gray-800::marker {
        color: #1f2937
      }

      .md\\\\:marker-gray-900::-webkit-details-marker, .md\\\\:marker-gray-900::marker {
        color: #111827
      }

      .md\\\\:marker-red-50::-webkit-details-marker, .md\\\\:marker-red-50::marker {
        color: #fef2f2
      }

      .md\\\\:marker-red-100::-webkit-details-marker, .md\\\\:marker-red-100::marker {
        color: #fee2e2
      }

      .md\\\\:marker-red-200::-webkit-details-marker, .md\\\\:marker-red-200::marker {
        color: #fecaca
      }

      .md\\\\:marker-red-300::-webkit-details-marker, .md\\\\:marker-red-300::marker {
        color: #fca5a5
      }

      .md\\\\:marker-red-400::-webkit-details-marker, .md\\\\:marker-red-400::marker {
        color: #f87171
      }

      .md\\\\:marker-red-500::-webkit-details-marker, .md\\\\:marker-red-500::marker {
        color: #ef4444
      }

      .md\\\\:marker-red-600::-webkit-details-marker, .md\\\\:marker-red-600::marker {
        color: #dc2626
      }

      .md\\\\:marker-red-700::-webkit-details-marker, .md\\\\:marker-red-700::marker {
        color: #b91c1c
      }

      .md\\\\:marker-red-800::-webkit-details-marker, .md\\\\:marker-red-800::marker {
        color: #991b1b
      }

      .md\\\\:marker-red-900::-webkit-details-marker, .md\\\\:marker-red-900::marker {
        color: #7f1d1d
      }

      .md\\\\:marker-yellow-50::-webkit-details-marker, .md\\\\:marker-yellow-50::marker {
        color: #fffbeb
      }

      .md\\\\:marker-yellow-100::-webkit-details-marker, .md\\\\:marker-yellow-100::marker {
        color: #fef3c7
      }

      .md\\\\:marker-yellow-200::-webkit-details-marker, .md\\\\:marker-yellow-200::marker {
        color: #fde68a
      }

      .md\\\\:marker-yellow-300::-webkit-details-marker, .md\\\\:marker-yellow-300::marker {
        color: #fcd34d
      }

      .md\\\\:marker-yellow-400::-webkit-details-marker, .md\\\\:marker-yellow-400::marker {
        color: #fbbf24
      }

      .md\\\\:marker-yellow-500::-webkit-details-marker, .md\\\\:marker-yellow-500::marker {
        color: #f59e0b
      }

      .md\\\\:marker-yellow-600::-webkit-details-marker, .md\\\\:marker-yellow-600::marker {
        color: #d97706
      }

      .md\\\\:marker-yellow-700::-webkit-details-marker, .md\\\\:marker-yellow-700::marker {
        color: #b45309
      }

      .md\\\\:marker-yellow-800::-webkit-details-marker, .md\\\\:marker-yellow-800::marker {
        color: #92400e
      }

      .md\\\\:marker-yellow-900::-webkit-details-marker, .md\\\\:marker-yellow-900::marker {
        color: #78350f
      }

      .md\\\\:marker-green-50::-webkit-details-marker, .md\\\\:marker-green-50::marker {
        color: #ecfdf5
      }

      .md\\\\:marker-green-100::-webkit-details-marker, .md\\\\:marker-green-100::marker {
        color: #d1fae5
      }

      .md\\\\:marker-green-200::-webkit-details-marker, .md\\\\:marker-green-200::marker {
        color: #a7f3d0
      }

      .md\\\\:marker-green-300::-webkit-details-marker, .md\\\\:marker-green-300::marker {
        color: #6ee7b7
      }

      .md\\\\:marker-green-400::-webkit-details-marker, .md\\\\:marker-green-400::marker {
        color: #34d399
      }

      .md\\\\:marker-green-500::-webkit-details-marker, .md\\\\:marker-green-500::marker {
        color: #10b981
      }

      .md\\\\:marker-green-600::-webkit-details-marker, .md\\\\:marker-green-600::marker {
        color: #059669
      }

      .md\\\\:marker-green-700::-webkit-details-marker, .md\\\\:marker-green-700::marker {
        color: #047857
      }

      .md\\\\:marker-green-800::-webkit-details-marker, .md\\\\:marker-green-800::marker {
        color: #065f46
      }

      .md\\\\:marker-green-900::-webkit-details-marker, .md\\\\:marker-green-900::marker {
        color: #064e3b
      }

      .md\\\\:marker-blue-50::-webkit-details-marker, .md\\\\:marker-blue-50::marker {
        color: #eff6ff
      }

      .md\\\\:marker-blue-100::-webkit-details-marker, .md\\\\:marker-blue-100::marker {
        color: #dbeafe
      }

      .md\\\\:marker-blue-200::-webkit-details-marker, .md\\\\:marker-blue-200::marker {
        color: #bfdbfe
      }

      .md\\\\:marker-blue-300::-webkit-details-marker, .md\\\\:marker-blue-300::marker {
        color: #93c5fd
      }

      .md\\\\:marker-blue-400::-webkit-details-marker, .md\\\\:marker-blue-400::marker {
        color: #60a5fa
      }

      .md\\\\:marker-blue-500::-webkit-details-marker, .md\\\\:marker-blue-500::marker {
        color: #3b82f6
      }

      .md\\\\:marker-blue-600::-webkit-details-marker, .md\\\\:marker-blue-600::marker {
        color: #2563eb
      }

      .md\\\\:marker-blue-700::-webkit-details-marker, .md\\\\:marker-blue-700::marker {
        color: #1d4ed8
      }

      .md\\\\:marker-blue-800::-webkit-details-marker, .md\\\\:marker-blue-800::marker {
        color: #1e40af
      }

      .md\\\\:marker-blue-900::-webkit-details-marker, .md\\\\:marker-blue-900::marker {
        color: #1e3a8a
      }

      .md\\\\:marker-indigo-50::-webkit-details-marker, .md\\\\:marker-indigo-50::marker {
        color: #eef2ff
      }

      .md\\\\:marker-indigo-100::-webkit-details-marker, .md\\\\:marker-indigo-100::marker {
        color: #e0e7ff
      }

      .md\\\\:marker-indigo-200::-webkit-details-marker, .md\\\\:marker-indigo-200::marker {
        color: #c7d2fe
      }

      .md\\\\:marker-indigo-300::-webkit-details-marker, .md\\\\:marker-indigo-300::marker {
        color: #a5b4fc
      }

      .md\\\\:marker-indigo-400::-webkit-details-marker, .md\\\\:marker-indigo-400::marker {
        color: #818cf8
      }

      .md\\\\:marker-indigo-500::-webkit-details-marker, .md\\\\:marker-indigo-500::marker {
        color: #6366f1
      }

      .md\\\\:marker-indigo-600::-webkit-details-marker, .md\\\\:marker-indigo-600::marker {
        color: #4f46e5
      }

      .md\\\\:marker-indigo-700::-webkit-details-marker, .md\\\\:marker-indigo-700::marker {
        color: #4338ca
      }

      .md\\\\:marker-indigo-800::-webkit-details-marker, .md\\\\:marker-indigo-800::marker {
        color: #3730a3
      }

      .md\\\\:marker-indigo-900::-webkit-details-marker, .md\\\\:marker-indigo-900::marker {
        color: #312e81
      }

      .md\\\\:marker-purple-50::-webkit-details-marker, .md\\\\:marker-purple-50::marker {
        color: #f5f3ff
      }

      .md\\\\:marker-purple-100::-webkit-details-marker, .md\\\\:marker-purple-100::marker {
        color: #ede9fe
      }

      .md\\\\:marker-purple-200::-webkit-details-marker, .md\\\\:marker-purple-200::marker {
        color: #ddd6fe
      }

      .md\\\\:marker-purple-300::-webkit-details-marker, .md\\\\:marker-purple-300::marker {
        color: #c4b5fd
      }

      .md\\\\:marker-purple-400::-webkit-details-marker, .md\\\\:marker-purple-400::marker {
        color: #a78bfa
      }

      .md\\\\:marker-purple-500::-webkit-details-marker, .md\\\\:marker-purple-500::marker {
        color: #8b5cf6
      }

      .md\\\\:marker-purple-600::-webkit-details-marker, .md\\\\:marker-purple-600::marker {
        color: #7c3aed
      }

      .md\\\\:marker-purple-700::-webkit-details-marker, .md\\\\:marker-purple-700::marker {
        color: #6d28d9
      }

      .md\\\\:marker-purple-800::-webkit-details-marker, .md\\\\:marker-purple-800::marker {
        color: #5b21b6
      }

      .md\\\\:marker-purple-900::-webkit-details-marker, .md\\\\:marker-purple-900::marker {
        color: #4c1d95
      }

      .md\\\\:marker-pink-50::-webkit-details-marker, .md\\\\:marker-pink-50::marker {
        color: #fdf2f8
      }

      .md\\\\:marker-pink-100::-webkit-details-marker, .md\\\\:marker-pink-100::marker {
        color: #fce7f3
      }

      .md\\\\:marker-pink-200::-webkit-details-marker, .md\\\\:marker-pink-200::marker {
        color: #fbcfe8
      }

      .md\\\\:marker-pink-300::-webkit-details-marker, .md\\\\:marker-pink-300::marker {
        color: #f9a8d4
      }

      .md\\\\:marker-pink-400::-webkit-details-marker, .md\\\\:marker-pink-400::marker {
        color: #f472b6
      }

      .md\\\\:marker-pink-500::-webkit-details-marker, .md\\\\:marker-pink-500::marker {
        color: #ec4899
      }

      .md\\\\:marker-pink-600::-webkit-details-marker, .md\\\\:marker-pink-600::marker {
        color: #db2777
      }

      .md\\\\:marker-pink-700::-webkit-details-marker, .md\\\\:marker-pink-700::marker {
        color: #be185d
      }

      .md\\\\:marker-pink-800::-webkit-details-marker, .md\\\\:marker-pink-800::marker {
        color: #9d174d
      }

      .md\\\\:marker-pink-900::-webkit-details-marker, .md\\\\:marker-pink-900::marker {
        color: #831843
      }
    }

    @media (min-width: 1024px) {
      .lg\\\\:marker-current::-webkit-details-marker, .lg\\\\:marker-current::marker {
        color: currentColor
      }

      .lg\\\\:marker-black::-webkit-details-marker, .lg\\\\:marker-black::marker {
        color: #000
      }

      .lg\\\\:marker-white::-webkit-details-marker, .lg\\\\:marker-white::marker {
        color: #fff
      }

      .lg\\\\:marker-gray-50::-webkit-details-marker, .lg\\\\:marker-gray-50::marker {
        color: #f9fafb
      }

      .lg\\\\:marker-gray-100::-webkit-details-marker, .lg\\\\:marker-gray-100::marker {
        color: #f3f4f6
      }

      .lg\\\\:marker-gray-200::-webkit-details-marker, .lg\\\\:marker-gray-200::marker {
        color: #e5e7eb
      }

      .lg\\\\:marker-gray-300::-webkit-details-marker, .lg\\\\:marker-gray-300::marker {
        color: #d1d5db
      }

      .lg\\\\:marker-gray-400::-webkit-details-marker, .lg\\\\:marker-gray-400::marker {
        color: #9ca3af
      }

      .lg\\\\:marker-gray-500::-webkit-details-marker, .lg\\\\:marker-gray-500::marker {
        color: #6b7280
      }

      .lg\\\\:marker-gray-600::-webkit-details-marker, .lg\\\\:marker-gray-600::marker {
        color: #4b5563
      }

      .lg\\\\:marker-gray-700::-webkit-details-marker, .lg\\\\:marker-gray-700::marker {
        color: #374151
      }

      .lg\\\\:marker-gray-800::-webkit-details-marker, .lg\\\\:marker-gray-800::marker {
        color: #1f2937
      }

      .lg\\\\:marker-gray-900::-webkit-details-marker, .lg\\\\:marker-gray-900::marker {
        color: #111827
      }

      .lg\\\\:marker-red-50::-webkit-details-marker, .lg\\\\:marker-red-50::marker {
        color: #fef2f2
      }

      .lg\\\\:marker-red-100::-webkit-details-marker, .lg\\\\:marker-red-100::marker {
        color: #fee2e2
      }

      .lg\\\\:marker-red-200::-webkit-details-marker, .lg\\\\:marker-red-200::marker {
        color: #fecaca
      }

      .lg\\\\:marker-red-300::-webkit-details-marker, .lg\\\\:marker-red-300::marker {
        color: #fca5a5
      }

      .lg\\\\:marker-red-400::-webkit-details-marker, .lg\\\\:marker-red-400::marker {
        color: #f87171
      }

      .lg\\\\:marker-red-500::-webkit-details-marker, .lg\\\\:marker-red-500::marker {
        color: #ef4444
      }

      .lg\\\\:marker-red-600::-webkit-details-marker, .lg\\\\:marker-red-600::marker {
        color: #dc2626
      }

      .lg\\\\:marker-red-700::-webkit-details-marker, .lg\\\\:marker-red-700::marker {
        color: #b91c1c
      }

      .lg\\\\:marker-red-800::-webkit-details-marker, .lg\\\\:marker-red-800::marker {
        color: #991b1b
      }

      .lg\\\\:marker-red-900::-webkit-details-marker, .lg\\\\:marker-red-900::marker {
        color: #7f1d1d
      }

      .lg\\\\:marker-yellow-50::-webkit-details-marker, .lg\\\\:marker-yellow-50::marker {
        color: #fffbeb
      }

      .lg\\\\:marker-yellow-100::-webkit-details-marker, .lg\\\\:marker-yellow-100::marker {
        color: #fef3c7
      }

      .lg\\\\:marker-yellow-200::-webkit-details-marker, .lg\\\\:marker-yellow-200::marker {
        color: #fde68a
      }

      .lg\\\\:marker-yellow-300::-webkit-details-marker, .lg\\\\:marker-yellow-300::marker {
        color: #fcd34d
      }

      .lg\\\\:marker-yellow-400::-webkit-details-marker, .lg\\\\:marker-yellow-400::marker {
        color: #fbbf24
      }

      .lg\\\\:marker-yellow-500::-webkit-details-marker, .lg\\\\:marker-yellow-500::marker {
        color: #f59e0b
      }

      .lg\\\\:marker-yellow-600::-webkit-details-marker, .lg\\\\:marker-yellow-600::marker {
        color: #d97706
      }

      .lg\\\\:marker-yellow-700::-webkit-details-marker, .lg\\\\:marker-yellow-700::marker {
        color: #b45309
      }

      .lg\\\\:marker-yellow-800::-webkit-details-marker, .lg\\\\:marker-yellow-800::marker {
        color: #92400e
      }

      .lg\\\\:marker-yellow-900::-webkit-details-marker, .lg\\\\:marker-yellow-900::marker {
        color: #78350f
      }

      .lg\\\\:marker-green-50::-webkit-details-marker, .lg\\\\:marker-green-50::marker {
        color: #ecfdf5
      }

      .lg\\\\:marker-green-100::-webkit-details-marker, .lg\\\\:marker-green-100::marker {
        color: #d1fae5
      }

      .lg\\\\:marker-green-200::-webkit-details-marker, .lg\\\\:marker-green-200::marker {
        color: #a7f3d0
      }

      .lg\\\\:marker-green-300::-webkit-details-marker, .lg\\\\:marker-green-300::marker {
        color: #6ee7b7
      }

      .lg\\\\:marker-green-400::-webkit-details-marker, .lg\\\\:marker-green-400::marker {
        color: #34d399
      }

      .lg\\\\:marker-green-500::-webkit-details-marker, .lg\\\\:marker-green-500::marker {
        color: #10b981
      }

      .lg\\\\:marker-green-600::-webkit-details-marker, .lg\\\\:marker-green-600::marker {
        color: #059669
      }

      .lg\\\\:marker-green-700::-webkit-details-marker, .lg\\\\:marker-green-700::marker {
        color: #047857
      }

      .lg\\\\:marker-green-800::-webkit-details-marker, .lg\\\\:marker-green-800::marker {
        color: #065f46
      }

      .lg\\\\:marker-green-900::-webkit-details-marker, .lg\\\\:marker-green-900::marker {
        color: #064e3b
      }

      .lg\\\\:marker-blue-50::-webkit-details-marker, .lg\\\\:marker-blue-50::marker {
        color: #eff6ff
      }

      .lg\\\\:marker-blue-100::-webkit-details-marker, .lg\\\\:marker-blue-100::marker {
        color: #dbeafe
      }

      .lg\\\\:marker-blue-200::-webkit-details-marker, .lg\\\\:marker-blue-200::marker {
        color: #bfdbfe
      }

      .lg\\\\:marker-blue-300::-webkit-details-marker, .lg\\\\:marker-blue-300::marker {
        color: #93c5fd
      }

      .lg\\\\:marker-blue-400::-webkit-details-marker, .lg\\\\:marker-blue-400::marker {
        color: #60a5fa
      }

      .lg\\\\:marker-blue-500::-webkit-details-marker, .lg\\\\:marker-blue-500::marker {
        color: #3b82f6
      }

      .lg\\\\:marker-blue-600::-webkit-details-marker, .lg\\\\:marker-blue-600::marker {
        color: #2563eb
      }

      .lg\\\\:marker-blue-700::-webkit-details-marker, .lg\\\\:marker-blue-700::marker {
        color: #1d4ed8
      }

      .lg\\\\:marker-blue-800::-webkit-details-marker, .lg\\\\:marker-blue-800::marker {
        color: #1e40af
      }

      .lg\\\\:marker-blue-900::-webkit-details-marker, .lg\\\\:marker-blue-900::marker {
        color: #1e3a8a
      }

      .lg\\\\:marker-indigo-50::-webkit-details-marker, .lg\\\\:marker-indigo-50::marker {
        color: #eef2ff
      }

      .lg\\\\:marker-indigo-100::-webkit-details-marker, .lg\\\\:marker-indigo-100::marker {
        color: #e0e7ff
      }

      .lg\\\\:marker-indigo-200::-webkit-details-marker, .lg\\\\:marker-indigo-200::marker {
        color: #c7d2fe
      }

      .lg\\\\:marker-indigo-300::-webkit-details-marker, .lg\\\\:marker-indigo-300::marker {
        color: #a5b4fc
      }

      .lg\\\\:marker-indigo-400::-webkit-details-marker, .lg\\\\:marker-indigo-400::marker {
        color: #818cf8
      }

      .lg\\\\:marker-indigo-500::-webkit-details-marker, .lg\\\\:marker-indigo-500::marker {
        color: #6366f1
      }

      .lg\\\\:marker-indigo-600::-webkit-details-marker, .lg\\\\:marker-indigo-600::marker {
        color: #4f46e5
      }

      .lg\\\\:marker-indigo-700::-webkit-details-marker, .lg\\\\:marker-indigo-700::marker {
        color: #4338ca
      }

      .lg\\\\:marker-indigo-800::-webkit-details-marker, .lg\\\\:marker-indigo-800::marker {
        color: #3730a3
      }

      .lg\\\\:marker-indigo-900::-webkit-details-marker, .lg\\\\:marker-indigo-900::marker {
        color: #312e81
      }

      .lg\\\\:marker-purple-50::-webkit-details-marker, .lg\\\\:marker-purple-50::marker {
        color: #f5f3ff
      }

      .lg\\\\:marker-purple-100::-webkit-details-marker, .lg\\\\:marker-purple-100::marker {
        color: #ede9fe
      }

      .lg\\\\:marker-purple-200::-webkit-details-marker, .lg\\\\:marker-purple-200::marker {
        color: #ddd6fe
      }

      .lg\\\\:marker-purple-300::-webkit-details-marker, .lg\\\\:marker-purple-300::marker {
        color: #c4b5fd
      }

      .lg\\\\:marker-purple-400::-webkit-details-marker, .lg\\\\:marker-purple-400::marker {
        color: #a78bfa
      }

      .lg\\\\:marker-purple-500::-webkit-details-marker, .lg\\\\:marker-purple-500::marker {
        color: #8b5cf6
      }

      .lg\\\\:marker-purple-600::-webkit-details-marker, .lg\\\\:marker-purple-600::marker {
        color: #7c3aed
      }

      .lg\\\\:marker-purple-700::-webkit-details-marker, .lg\\\\:marker-purple-700::marker {
        color: #6d28d9
      }

      .lg\\\\:marker-purple-800::-webkit-details-marker, .lg\\\\:marker-purple-800::marker {
        color: #5b21b6
      }

      .lg\\\\:marker-purple-900::-webkit-details-marker, .lg\\\\:marker-purple-900::marker {
        color: #4c1d95
      }

      .lg\\\\:marker-pink-50::-webkit-details-marker, .lg\\\\:marker-pink-50::marker {
        color: #fdf2f8
      }

      .lg\\\\:marker-pink-100::-webkit-details-marker, .lg\\\\:marker-pink-100::marker {
        color: #fce7f3
      }

      .lg\\\\:marker-pink-200::-webkit-details-marker, .lg\\\\:marker-pink-200::marker {
        color: #fbcfe8
      }

      .lg\\\\:marker-pink-300::-webkit-details-marker, .lg\\\\:marker-pink-300::marker {
        color: #f9a8d4
      }

      .lg\\\\:marker-pink-400::-webkit-details-marker, .lg\\\\:marker-pink-400::marker {
        color: #f472b6
      }

      .lg\\\\:marker-pink-500::-webkit-details-marker, .lg\\\\:marker-pink-500::marker {
        color: #ec4899
      }

      .lg\\\\:marker-pink-600::-webkit-details-marker, .lg\\\\:marker-pink-600::marker {
        color: #db2777
      }

      .lg\\\\:marker-pink-700::-webkit-details-marker, .lg\\\\:marker-pink-700::marker {
        color: #be185d
      }

      .lg\\\\:marker-pink-800::-webkit-details-marker, .lg\\\\:marker-pink-800::marker {
        color: #9d174d
      }

      .lg\\\\:marker-pink-900::-webkit-details-marker, .lg\\\\:marker-pink-900::marker {
        color: #831843
      }
    }

    @media (min-width: 1280px) {
      .xl\\\\:marker-current::-webkit-details-marker, .xl\\\\:marker-current::marker {
        color: currentColor
      }

      .xl\\\\:marker-black::-webkit-details-marker, .xl\\\\:marker-black::marker {
        color: #000
      }

      .xl\\\\:marker-white::-webkit-details-marker, .xl\\\\:marker-white::marker {
        color: #fff
      }

      .xl\\\\:marker-gray-50::-webkit-details-marker, .xl\\\\:marker-gray-50::marker {
        color: #f9fafb
      }

      .xl\\\\:marker-gray-100::-webkit-details-marker, .xl\\\\:marker-gray-100::marker {
        color: #f3f4f6
      }

      .xl\\\\:marker-gray-200::-webkit-details-marker, .xl\\\\:marker-gray-200::marker {
        color: #e5e7eb
      }

      .xl\\\\:marker-gray-300::-webkit-details-marker, .xl\\\\:marker-gray-300::marker {
        color: #d1d5db
      }

      .xl\\\\:marker-gray-400::-webkit-details-marker, .xl\\\\:marker-gray-400::marker {
        color: #9ca3af
      }

      .xl\\\\:marker-gray-500::-webkit-details-marker, .xl\\\\:marker-gray-500::marker {
        color: #6b7280
      }

      .xl\\\\:marker-gray-600::-webkit-details-marker, .xl\\\\:marker-gray-600::marker {
        color: #4b5563
      }

      .xl\\\\:marker-gray-700::-webkit-details-marker, .xl\\\\:marker-gray-700::marker {
        color: #374151
      }

      .xl\\\\:marker-gray-800::-webkit-details-marker, .xl\\\\:marker-gray-800::marker {
        color: #1f2937
      }

      .xl\\\\:marker-gray-900::-webkit-details-marker, .xl\\\\:marker-gray-900::marker {
        color: #111827
      }

      .xl\\\\:marker-red-50::-webkit-details-marker, .xl\\\\:marker-red-50::marker {
        color: #fef2f2
      }

      .xl\\\\:marker-red-100::-webkit-details-marker, .xl\\\\:marker-red-100::marker {
        color: #fee2e2
      }

      .xl\\\\:marker-red-200::-webkit-details-marker, .xl\\\\:marker-red-200::marker {
        color: #fecaca
      }

      .xl\\\\:marker-red-300::-webkit-details-marker, .xl\\\\:marker-red-300::marker {
        color: #fca5a5
      }

      .xl\\\\:marker-red-400::-webkit-details-marker, .xl\\\\:marker-red-400::marker {
        color: #f87171
      }

      .xl\\\\:marker-red-500::-webkit-details-marker, .xl\\\\:marker-red-500::marker {
        color: #ef4444
      }

      .xl\\\\:marker-red-600::-webkit-details-marker, .xl\\\\:marker-red-600::marker {
        color: #dc2626
      }

      .xl\\\\:marker-red-700::-webkit-details-marker, .xl\\\\:marker-red-700::marker {
        color: #b91c1c
      }

      .xl\\\\:marker-red-800::-webkit-details-marker, .xl\\\\:marker-red-800::marker {
        color: #991b1b
      }

      .xl\\\\:marker-red-900::-webkit-details-marker, .xl\\\\:marker-red-900::marker {
        color: #7f1d1d
      }

      .xl\\\\:marker-yellow-50::-webkit-details-marker, .xl\\\\:marker-yellow-50::marker {
        color: #fffbeb
      }

      .xl\\\\:marker-yellow-100::-webkit-details-marker, .xl\\\\:marker-yellow-100::marker {
        color: #fef3c7
      }

      .xl\\\\:marker-yellow-200::-webkit-details-marker, .xl\\\\:marker-yellow-200::marker {
        color: #fde68a
      }

      .xl\\\\:marker-yellow-300::-webkit-details-marker, .xl\\\\:marker-yellow-300::marker {
        color: #fcd34d
      }

      .xl\\\\:marker-yellow-400::-webkit-details-marker, .xl\\\\:marker-yellow-400::marker {
        color: #fbbf24
      }

      .xl\\\\:marker-yellow-500::-webkit-details-marker, .xl\\\\:marker-yellow-500::marker {
        color: #f59e0b
      }

      .xl\\\\:marker-yellow-600::-webkit-details-marker, .xl\\\\:marker-yellow-600::marker {
        color: #d97706
      }

      .xl\\\\:marker-yellow-700::-webkit-details-marker, .xl\\\\:marker-yellow-700::marker {
        color: #b45309
      }

      .xl\\\\:marker-yellow-800::-webkit-details-marker, .xl\\\\:marker-yellow-800::marker {
        color: #92400e
      }

      .xl\\\\:marker-yellow-900::-webkit-details-marker, .xl\\\\:marker-yellow-900::marker {
        color: #78350f
      }

      .xl\\\\:marker-green-50::-webkit-details-marker, .xl\\\\:marker-green-50::marker {
        color: #ecfdf5
      }

      .xl\\\\:marker-green-100::-webkit-details-marker, .xl\\\\:marker-green-100::marker {
        color: #d1fae5
      }

      .xl\\\\:marker-green-200::-webkit-details-marker, .xl\\\\:marker-green-200::marker {
        color: #a7f3d0
      }

      .xl\\\\:marker-green-300::-webkit-details-marker, .xl\\\\:marker-green-300::marker {
        color: #6ee7b7
      }

      .xl\\\\:marker-green-400::-webkit-details-marker, .xl\\\\:marker-green-400::marker {
        color: #34d399
      }

      .xl\\\\:marker-green-500::-webkit-details-marker, .xl\\\\:marker-green-500::marker {
        color: #10b981
      }

      .xl\\\\:marker-green-600::-webkit-details-marker, .xl\\\\:marker-green-600::marker {
        color: #059669
      }

      .xl\\\\:marker-green-700::-webkit-details-marker, .xl\\\\:marker-green-700::marker {
        color: #047857
      }

      .xl\\\\:marker-green-800::-webkit-details-marker, .xl\\\\:marker-green-800::marker {
        color: #065f46
      }

      .xl\\\\:marker-green-900::-webkit-details-marker, .xl\\\\:marker-green-900::marker {
        color: #064e3b
      }

      .xl\\\\:marker-blue-50::-webkit-details-marker, .xl\\\\:marker-blue-50::marker {
        color: #eff6ff
      }

      .xl\\\\:marker-blue-100::-webkit-details-marker, .xl\\\\:marker-blue-100::marker {
        color: #dbeafe
      }

      .xl\\\\:marker-blue-200::-webkit-details-marker, .xl\\\\:marker-blue-200::marker {
        color: #bfdbfe
      }

      .xl\\\\:marker-blue-300::-webkit-details-marker, .xl\\\\:marker-blue-300::marker {
        color: #93c5fd
      }

      .xl\\\\:marker-blue-400::-webkit-details-marker, .xl\\\\:marker-blue-400::marker {
        color: #60a5fa
      }

      .xl\\\\:marker-blue-500::-webkit-details-marker, .xl\\\\:marker-blue-500::marker {
        color: #3b82f6
      }

      .xl\\\\:marker-blue-600::-webkit-details-marker, .xl\\\\:marker-blue-600::marker {
        color: #2563eb
      }

      .xl\\\\:marker-blue-700::-webkit-details-marker, .xl\\\\:marker-blue-700::marker {
        color: #1d4ed8
      }

      .xl\\\\:marker-blue-800::-webkit-details-marker, .xl\\\\:marker-blue-800::marker {
        color: #1e40af
      }

      .xl\\\\:marker-blue-900::-webkit-details-marker, .xl\\\\:marker-blue-900::marker {
        color: #1e3a8a
      }

      .xl\\\\:marker-indigo-50::-webkit-details-marker, .xl\\\\:marker-indigo-50::marker {
        color: #eef2ff
      }

      .xl\\\\:marker-indigo-100::-webkit-details-marker, .xl\\\\:marker-indigo-100::marker {
        color: #e0e7ff
      }

      .xl\\\\:marker-indigo-200::-webkit-details-marker, .xl\\\\:marker-indigo-200::marker {
        color: #c7d2fe
      }

      .xl\\\\:marker-indigo-300::-webkit-details-marker, .xl\\\\:marker-indigo-300::marker {
        color: #a5b4fc
      }

      .xl\\\\:marker-indigo-400::-webkit-details-marker, .xl\\\\:marker-indigo-400::marker {
        color: #818cf8
      }

      .xl\\\\:marker-indigo-500::-webkit-details-marker, .xl\\\\:marker-indigo-500::marker {
        color: #6366f1
      }

      .xl\\\\:marker-indigo-600::-webkit-details-marker, .xl\\\\:marker-indigo-600::marker {
        color: #4f46e5
      }

      .xl\\\\:marker-indigo-700::-webkit-details-marker, .xl\\\\:marker-indigo-700::marker {
        color: #4338ca
      }

      .xl\\\\:marker-indigo-800::-webkit-details-marker, .xl\\\\:marker-indigo-800::marker {
        color: #3730a3
      }

      .xl\\\\:marker-indigo-900::-webkit-details-marker, .xl\\\\:marker-indigo-900::marker {
        color: #312e81
      }

      .xl\\\\:marker-purple-50::-webkit-details-marker, .xl\\\\:marker-purple-50::marker {
        color: #f5f3ff
      }

      .xl\\\\:marker-purple-100::-webkit-details-marker, .xl\\\\:marker-purple-100::marker {
        color: #ede9fe
      }

      .xl\\\\:marker-purple-200::-webkit-details-marker, .xl\\\\:marker-purple-200::marker {
        color: #ddd6fe
      }

      .xl\\\\:marker-purple-300::-webkit-details-marker, .xl\\\\:marker-purple-300::marker {
        color: #c4b5fd
      }

      .xl\\\\:marker-purple-400::-webkit-details-marker, .xl\\\\:marker-purple-400::marker {
        color: #a78bfa
      }

      .xl\\\\:marker-purple-500::-webkit-details-marker, .xl\\\\:marker-purple-500::marker {
        color: #8b5cf6
      }

      .xl\\\\:marker-purple-600::-webkit-details-marker, .xl\\\\:marker-purple-600::marker {
        color: #7c3aed
      }

      .xl\\\\:marker-purple-700::-webkit-details-marker, .xl\\\\:marker-purple-700::marker {
        color: #6d28d9
      }

      .xl\\\\:marker-purple-800::-webkit-details-marker, .xl\\\\:marker-purple-800::marker {
        color: #5b21b6
      }

      .xl\\\\:marker-purple-900::-webkit-details-marker, .xl\\\\:marker-purple-900::marker {
        color: #4c1d95
      }

      .xl\\\\:marker-pink-50::-webkit-details-marker, .xl\\\\:marker-pink-50::marker {
        color: #fdf2f8
      }

      .xl\\\\:marker-pink-100::-webkit-details-marker, .xl\\\\:marker-pink-100::marker {
        color: #fce7f3
      }

      .xl\\\\:marker-pink-200::-webkit-details-marker, .xl\\\\:marker-pink-200::marker {
        color: #fbcfe8
      }

      .xl\\\\:marker-pink-300::-webkit-details-marker, .xl\\\\:marker-pink-300::marker {
        color: #f9a8d4
      }

      .xl\\\\:marker-pink-400::-webkit-details-marker, .xl\\\\:marker-pink-400::marker {
        color: #f472b6
      }

      .xl\\\\:marker-pink-500::-webkit-details-marker, .xl\\\\:marker-pink-500::marker {
        color: #ec4899
      }

      .xl\\\\:marker-pink-600::-webkit-details-marker, .xl\\\\:marker-pink-600::marker {
        color: #db2777
      }

      .xl\\\\:marker-pink-700::-webkit-details-marker, .xl\\\\:marker-pink-700::marker {
        color: #be185d
      }

      .xl\\\\:marker-pink-800::-webkit-details-marker, .xl\\\\:marker-pink-800::marker {
        color: #9d174d
      }

      .xl\\\\:marker-pink-900::-webkit-details-marker, .xl\\\\:marker-pink-900::marker {
        color: #831843
      }
    }

    @media (min-width: 1536px) {
      .\\\\32xl\\\\:marker-current::-webkit-details-marker, .\\\\32xl\\\\:marker-current::marker {
        color: currentColor
      }

      .\\\\32xl\\\\:marker-black::-webkit-details-marker, .\\\\32xl\\\\:marker-black::marker {
        color: #000
      }

      .\\\\32xl\\\\:marker-white::-webkit-details-marker, .\\\\32xl\\\\:marker-white::marker {
        color: #fff
      }

      .\\\\32xl\\\\:marker-gray-50::-webkit-details-marker, .\\\\32xl\\\\:marker-gray-50::marker {
        color: #f9fafb
      }

      .\\\\32xl\\\\:marker-gray-100::-webkit-details-marker, .\\\\32xl\\\\:marker-gray-100::marker {
        color: #f3f4f6
      }

      .\\\\32xl\\\\:marker-gray-200::-webkit-details-marker, .\\\\32xl\\\\:marker-gray-200::marker {
        color: #e5e7eb
      }

      .\\\\32xl\\\\:marker-gray-300::-webkit-details-marker, .\\\\32xl\\\\:marker-gray-300::marker {
        color: #d1d5db
      }

      .\\\\32xl\\\\:marker-gray-400::-webkit-details-marker, .\\\\32xl\\\\:marker-gray-400::marker {
        color: #9ca3af
      }

      .\\\\32xl\\\\:marker-gray-500::-webkit-details-marker, .\\\\32xl\\\\:marker-gray-500::marker {
        color: #6b7280
      }

      .\\\\32xl\\\\:marker-gray-600::-webkit-details-marker, .\\\\32xl\\\\:marker-gray-600::marker {
        color: #4b5563
      }

      .\\\\32xl\\\\:marker-gray-700::-webkit-details-marker, .\\\\32xl\\\\:marker-gray-700::marker {
        color: #374151
      }

      .\\\\32xl\\\\:marker-gray-800::-webkit-details-marker, .\\\\32xl\\\\:marker-gray-800::marker {
        color: #1f2937
      }

      .\\\\32xl\\\\:marker-gray-900::-webkit-details-marker, .\\\\32xl\\\\:marker-gray-900::marker {
        color: #111827
      }

      .\\\\32xl\\\\:marker-red-50::-webkit-details-marker, .\\\\32xl\\\\:marker-red-50::marker {
        color: #fef2f2
      }

      .\\\\32xl\\\\:marker-red-100::-webkit-details-marker, .\\\\32xl\\\\:marker-red-100::marker {
        color: #fee2e2
      }

      .\\\\32xl\\\\:marker-red-200::-webkit-details-marker, .\\\\32xl\\\\:marker-red-200::marker {
        color: #fecaca
      }

      .\\\\32xl\\\\:marker-red-300::-webkit-details-marker, .\\\\32xl\\\\:marker-red-300::marker {
        color: #fca5a5
      }

      .\\\\32xl\\\\:marker-red-400::-webkit-details-marker, .\\\\32xl\\\\:marker-red-400::marker {
        color: #f87171
      }

      .\\\\32xl\\\\:marker-red-500::-webkit-details-marker, .\\\\32xl\\\\:marker-red-500::marker {
        color: #ef4444
      }

      .\\\\32xl\\\\:marker-red-600::-webkit-details-marker, .\\\\32xl\\\\:marker-red-600::marker {
        color: #dc2626
      }

      .\\\\32xl\\\\:marker-red-700::-webkit-details-marker, .\\\\32xl\\\\:marker-red-700::marker {
        color: #b91c1c
      }

      .\\\\32xl\\\\:marker-red-800::-webkit-details-marker, .\\\\32xl\\\\:marker-red-800::marker {
        color: #991b1b
      }

      .\\\\32xl\\\\:marker-red-900::-webkit-details-marker, .\\\\32xl\\\\:marker-red-900::marker {
        color: #7f1d1d
      }

      .\\\\32xl\\\\:marker-yellow-50::-webkit-details-marker, .\\\\32xl\\\\:marker-yellow-50::marker {
        color: #fffbeb
      }

      .\\\\32xl\\\\:marker-yellow-100::-webkit-details-marker, .\\\\32xl\\\\:marker-yellow-100::marker {
        color: #fef3c7
      }

      .\\\\32xl\\\\:marker-yellow-200::-webkit-details-marker, .\\\\32xl\\\\:marker-yellow-200::marker {
        color: #fde68a
      }

      .\\\\32xl\\\\:marker-yellow-300::-webkit-details-marker, .\\\\32xl\\\\:marker-yellow-300::marker {
        color: #fcd34d
      }

      .\\\\32xl\\\\:marker-yellow-400::-webkit-details-marker, .\\\\32xl\\\\:marker-yellow-400::marker {
        color: #fbbf24
      }

      .\\\\32xl\\\\:marker-yellow-500::-webkit-details-marker, .\\\\32xl\\\\:marker-yellow-500::marker {
        color: #f59e0b
      }

      .\\\\32xl\\\\:marker-yellow-600::-webkit-details-marker, .\\\\32xl\\\\:marker-yellow-600::marker {
        color: #d97706
      }

      .\\\\32xl\\\\:marker-yellow-700::-webkit-details-marker, .\\\\32xl\\\\:marker-yellow-700::marker {
        color: #b45309
      }

      .\\\\32xl\\\\:marker-yellow-800::-webkit-details-marker, .\\\\32xl\\\\:marker-yellow-800::marker {
        color: #92400e
      }

      .\\\\32xl\\\\:marker-yellow-900::-webkit-details-marker, .\\\\32xl\\\\:marker-yellow-900::marker {
        color: #78350f
      }

      .\\\\32xl\\\\:marker-green-50::-webkit-details-marker, .\\\\32xl\\\\:marker-green-50::marker {
        color: #ecfdf5
      }

      .\\\\32xl\\\\:marker-green-100::-webkit-details-marker, .\\\\32xl\\\\:marker-green-100::marker {
        color: #d1fae5
      }

      .\\\\32xl\\\\:marker-green-200::-webkit-details-marker, .\\\\32xl\\\\:marker-green-200::marker {
        color: #a7f3d0
      }

      .\\\\32xl\\\\:marker-green-300::-webkit-details-marker, .\\\\32xl\\\\:marker-green-300::marker {
        color: #6ee7b7
      }

      .\\\\32xl\\\\:marker-green-400::-webkit-details-marker, .\\\\32xl\\\\:marker-green-400::marker {
        color: #34d399
      }

      .\\\\32xl\\\\:marker-green-500::-webkit-details-marker, .\\\\32xl\\\\:marker-green-500::marker {
        color: #10b981
      }

      .\\\\32xl\\\\:marker-green-600::-webkit-details-marker, .\\\\32xl\\\\:marker-green-600::marker {
        color: #059669
      }

      .\\\\32xl\\\\:marker-green-700::-webkit-details-marker, .\\\\32xl\\\\:marker-green-700::marker {
        color: #047857
      }

      .\\\\32xl\\\\:marker-green-800::-webkit-details-marker, .\\\\32xl\\\\:marker-green-800::marker {
        color: #065f46
      }

      .\\\\32xl\\\\:marker-green-900::-webkit-details-marker, .\\\\32xl\\\\:marker-green-900::marker {
        color: #064e3b
      }

      .\\\\32xl\\\\:marker-blue-50::-webkit-details-marker, .\\\\32xl\\\\:marker-blue-50::marker {
        color: #eff6ff
      }

      .\\\\32xl\\\\:marker-blue-100::-webkit-details-marker, .\\\\32xl\\\\:marker-blue-100::marker {
        color: #dbeafe
      }

      .\\\\32xl\\\\:marker-blue-200::-webkit-details-marker, .\\\\32xl\\\\:marker-blue-200::marker {
        color: #bfdbfe
      }

      .\\\\32xl\\\\:marker-blue-300::-webkit-details-marker, .\\\\32xl\\\\:marker-blue-300::marker {
        color: #93c5fd
      }

      .\\\\32xl\\\\:marker-blue-400::-webkit-details-marker, .\\\\32xl\\\\:marker-blue-400::marker {
        color: #60a5fa
      }

      .\\\\32xl\\\\:marker-blue-500::-webkit-details-marker, .\\\\32xl\\\\:marker-blue-500::marker {
        color: #3b82f6
      }

      .\\\\32xl\\\\:marker-blue-600::-webkit-details-marker, .\\\\32xl\\\\:marker-blue-600::marker {
        color: #2563eb
      }

      .\\\\32xl\\\\:marker-blue-700::-webkit-details-marker, .\\\\32xl\\\\:marker-blue-700::marker {
        color: #1d4ed8
      }

      .\\\\32xl\\\\:marker-blue-800::-webkit-details-marker, .\\\\32xl\\\\:marker-blue-800::marker {
        color: #1e40af
      }

      .\\\\32xl\\\\:marker-blue-900::-webkit-details-marker, .\\\\32xl\\\\:marker-blue-900::marker {
        color: #1e3a8a
      }

      .\\\\32xl\\\\:marker-indigo-50::-webkit-details-marker, .\\\\32xl\\\\:marker-indigo-50::marker {
        color: #eef2ff
      }

      .\\\\32xl\\\\:marker-indigo-100::-webkit-details-marker, .\\\\32xl\\\\:marker-indigo-100::marker {
        color: #e0e7ff
      }

      .\\\\32xl\\\\:marker-indigo-200::-webkit-details-marker, .\\\\32xl\\\\:marker-indigo-200::marker {
        color: #c7d2fe
      }

      .\\\\32xl\\\\:marker-indigo-300::-webkit-details-marker, .\\\\32xl\\\\:marker-indigo-300::marker {
        color: #a5b4fc
      }

      .\\\\32xl\\\\:marker-indigo-400::-webkit-details-marker, .\\\\32xl\\\\:marker-indigo-400::marker {
        color: #818cf8
      }

      .\\\\32xl\\\\:marker-indigo-500::-webkit-details-marker, .\\\\32xl\\\\:marker-indigo-500::marker {
        color: #6366f1
      }

      .\\\\32xl\\\\:marker-indigo-600::-webkit-details-marker, .\\\\32xl\\\\:marker-indigo-600::marker {
        color: #4f46e5
      }

      .\\\\32xl\\\\:marker-indigo-700::-webkit-details-marker, .\\\\32xl\\\\:marker-indigo-700::marker {
        color: #4338ca
      }

      .\\\\32xl\\\\:marker-indigo-800::-webkit-details-marker, .\\\\32xl\\\\:marker-indigo-800::marker {
        color: #3730a3
      }

      .\\\\32xl\\\\:marker-indigo-900::-webkit-details-marker, .\\\\32xl\\\\:marker-indigo-900::marker {
        color: #312e81
      }

      .\\\\32xl\\\\:marker-purple-50::-webkit-details-marker, .\\\\32xl\\\\:marker-purple-50::marker {
        color: #f5f3ff
      }

      .\\\\32xl\\\\:marker-purple-100::-webkit-details-marker, .\\\\32xl\\\\:marker-purple-100::marker {
        color: #ede9fe
      }

      .\\\\32xl\\\\:marker-purple-200::-webkit-details-marker, .\\\\32xl\\\\:marker-purple-200::marker {
        color: #ddd6fe
      }

      .\\\\32xl\\\\:marker-purple-300::-webkit-details-marker, .\\\\32xl\\\\:marker-purple-300::marker {
        color: #c4b5fd
      }

      .\\\\32xl\\\\:marker-purple-400::-webkit-details-marker, .\\\\32xl\\\\:marker-purple-400::marker {
        color: #a78bfa
      }

      .\\\\32xl\\\\:marker-purple-500::-webkit-details-marker, .\\\\32xl\\\\:marker-purple-500::marker {
        color: #8b5cf6
      }

      .\\\\32xl\\\\:marker-purple-600::-webkit-details-marker, .\\\\32xl\\\\:marker-purple-600::marker {
        color: #7c3aed
      }

      .\\\\32xl\\\\:marker-purple-700::-webkit-details-marker, .\\\\32xl\\\\:marker-purple-700::marker {
        color: #6d28d9
      }

      .\\\\32xl\\\\:marker-purple-800::-webkit-details-marker, .\\\\32xl\\\\:marker-purple-800::marker {
        color: #5b21b6
      }

      .\\\\32xl\\\\:marker-purple-900::-webkit-details-marker, .\\\\32xl\\\\:marker-purple-900::marker {
        color: #4c1d95
      }

      .\\\\32xl\\\\:marker-pink-50::-webkit-details-marker, .\\\\32xl\\\\:marker-pink-50::marker {
        color: #fdf2f8
      }

      .\\\\32xl\\\\:marker-pink-100::-webkit-details-marker, .\\\\32xl\\\\:marker-pink-100::marker {
        color: #fce7f3
      }

      .\\\\32xl\\\\:marker-pink-200::-webkit-details-marker, .\\\\32xl\\\\:marker-pink-200::marker {
        color: #fbcfe8
      }

      .\\\\32xl\\\\:marker-pink-300::-webkit-details-marker, .\\\\32xl\\\\:marker-pink-300::marker {
        color: #f9a8d4
      }

      .\\\\32xl\\\\:marker-pink-400::-webkit-details-marker, .\\\\32xl\\\\:marker-pink-400::marker {
        color: #f472b6
      }

      .\\\\32xl\\\\:marker-pink-500::-webkit-details-marker, .\\\\32xl\\\\:marker-pink-500::marker {
        color: #ec4899
      }

      .\\\\32xl\\\\:marker-pink-600::-webkit-details-marker, .\\\\32xl\\\\:marker-pink-600::marker {
        color: #db2777
      }

      .\\\\32xl\\\\:marker-pink-700::-webkit-details-marker, .\\\\32xl\\\\:marker-pink-700::marker {
        color: #be185d
      }

      .\\\\32xl\\\\:marker-pink-800::-webkit-details-marker, .\\\\32xl\\\\:marker-pink-800::marker {
        color: #9d174d
      }

      .\\\\32xl\\\\:marker-pink-900::-webkit-details-marker, .\\\\32xl\\\\:marker-pink-900::marker {
        color: #831843
      }
    }"
  `);
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

    - .list-marker-white > ::marker {
    -   color: #fff
    - }
    -

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

    - @media (min-width: 640px) {
    + @media (min-width: 600px) {
    +   .sm\\\\:list-marker-black > ::marker {
    +     color: #000
    +   }
    +
    +   .sm\\\\:list-marker-white > ::marker {
    +     color: #fff
    +   }
    +

    ---

    -     color: #831843
    -   }
    - }
    -
    - @media (min-width: 768px) {
    -   .md\\\\:marker-current::-webkit-details-marker, .md\\\\:marker-current::marker {
    -     color: currentColor
    -   }
    -
    -   .md\\\\:marker-black::-webkit-details-marker, .md\\\\:marker-black::marker {
    -     color: #000
    -   }
    -
    -   .md\\\\:marker-white::-webkit-details-marker, .md\\\\:marker-white::marker {
    -     color: #fff
    -   }
    -
    -   .md\\\\:marker-gray-50::-webkit-details-marker, .md\\\\:marker-gray-50::marker {
    -     color: #f9fafb
    -   }
    -
    -   .md\\\\:marker-gray-100::-webkit-details-marker, .md\\\\:marker-gray-100::marker {
    -     color: #f3f4f6
    -   }
    -
    -   .md\\\\:marker-gray-200::-webkit-details-marker, .md\\\\:marker-gray-200::marker {
    -     color: #e5e7eb
    -   }
    -
    -   .md\\\\:marker-gray-300::-webkit-details-marker, .md\\\\:marker-gray-300::marker {
    -     color: #d1d5db
    -   }
    -
    -   .md\\\\:marker-gray-400::-webkit-details-marker, .md\\\\:marker-gray-400::marker {
    -     color: #9ca3af
    -   }
    -
    -   .md\\\\:marker-gray-500::-webkit-details-marker, .md\\\\:marker-gray-500::marker {
    -     color: #6b7280
    -   }
    -
    -   .md\\\\:marker-gray-600::-webkit-details-marker, .md\\\\:marker-gray-600::marker {
    -     color: #4b5563
    -   }
    -
    -   .md\\\\:marker-gray-700::-webkit-details-marker, .md\\\\:marker-gray-700::marker {
    -     color: #374151
    -   }
    -
    -   .md\\\\:marker-gray-800::-webkit-details-marker, .md\\\\:marker-gray-800::marker {
    -     color: #1f2937
    -   }
    -
    -   .md\\\\:marker-gray-900::-webkit-details-marker, .md\\\\:marker-gray-900::marker {
    -     color: #111827
    -   }
    -
    -   .md\\\\:marker-red-50::-webkit-details-marker, .md\\\\:marker-red-50::marker {
    -     color: #fef2f2
    -   }
    -
    -   .md\\\\:marker-red-100::-webkit-details-marker, .md\\\\:marker-red-100::marker {
    -     color: #fee2e2
    -   }
    -
    -   .md\\\\:marker-red-200::-webkit-details-marker, .md\\\\:marker-red-200::marker {
    -     color: #fecaca
    -   }
    -
    -   .md\\\\:marker-red-300::-webkit-details-marker, .md\\\\:marker-red-300::marker {
    -     color: #fca5a5
    -   }
    -
    -   .md\\\\:marker-red-400::-webkit-details-marker, .md\\\\:marker-red-400::marker {
    -     color: #f87171
    -   }
    -
    -   .md\\\\:marker-red-500::-webkit-details-marker, .md\\\\:marker-red-500::marker {
    -     color: #ef4444
    -   }
    -
    -   .md\\\\:marker-red-600::-webkit-details-marker, .md\\\\:marker-red-600::marker {
    -     color: #dc2626
    -   }
    -
    -   .md\\\\:marker-red-700::-webkit-details-marker, .md\\\\:marker-red-700::marker {
    -     color: #b91c1c
    -   }
    -
    -   .md\\\\:marker-red-800::-webkit-details-marker, .md\\\\:marker-red-800::marker {
    -     color: #991b1b
    -   }
    -
    -   .md\\\\:marker-red-900::-webkit-details-marker, .md\\\\:marker-red-900::marker {
    -     color: #7f1d1d
    -   }
    -
    -   .md\\\\:marker-yellow-50::-webkit-details-marker, .md\\\\:marker-yellow-50::marker {
    -     color: #fffbeb
    -   }
    -
    -   .md\\\\:marker-yellow-100::-webkit-details-marker, .md\\\\:marker-yellow-100::marker {
    -     color: #fef3c7
    -   }
    -
    -   .md\\\\:marker-yellow-200::-webkit-details-marker, .md\\\\:marker-yellow-200::marker {
    -     color: #fde68a
    -   }
    -
    -   .md\\\\:marker-yellow-300::-webkit-details-marker, .md\\\\:marker-yellow-300::marker {
    -     color: #fcd34d
    -   }
    -
    -   .md\\\\:marker-yellow-400::-webkit-details-marker, .md\\\\:marker-yellow-400::marker {
    -     color: #fbbf24
    -   }
    -
    -   .md\\\\:marker-yellow-500::-webkit-details-marker, .md\\\\:marker-yellow-500::marker {
    -     color: #f59e0b
    -   }
    -
    -   .md\\\\:marker-yellow-600::-webkit-details-marker, .md\\\\:marker-yellow-600::marker {
    -     color: #d97706
    -   }
    -
    -   .md\\\\:marker-yellow-700::-webkit-details-marker, .md\\\\:marker-yellow-700::marker {
    -     color: #b45309
    -   }
    -
    -   .md\\\\:marker-yellow-800::-webkit-details-marker, .md\\\\:marker-yellow-800::marker {
    -     color: #92400e
    -   }
    -
    -   .md\\\\:marker-yellow-900::-webkit-details-marker, .md\\\\:marker-yellow-900::marker {
    -     color: #78350f
    -   }
    -
    -   .md\\\\:marker-green-50::-webkit-details-marker, .md\\\\:marker-green-50::marker {
    -     color: #ecfdf5
    -   }
    -
    -   .md\\\\:marker-green-100::-webkit-details-marker, .md\\\\:marker-green-100::marker {
    -     color: #d1fae5
    -   }
    -
    -   .md\\\\:marker-green-200::-webkit-details-marker, .md\\\\:marker-green-200::marker {
    -     color: #a7f3d0
    -   }
    -
    -   .md\\\\:marker-green-300::-webkit-details-marker, .md\\\\:marker-green-300::marker {
    -     color: #6ee7b7
    -   }
    -
    -   .md\\\\:marker-green-400::-webkit-details-marker, .md\\\\:marker-green-400::marker {
    -     color: #34d399
    -   }
    -
    -   .md\\\\:marker-green-500::-webkit-details-marker, .md\\\\:marker-green-500::marker {
    -     color: #10b981
    -   }
    -
    -   .md\\\\:marker-green-600::-webkit-details-marker, .md\\\\:marker-green-600::marker {
    -     color: #059669
    -   }
    -
    -   .md\\\\:marker-green-700::-webkit-details-marker, .md\\\\:marker-green-700::marker {
    -     color: #047857
    -   }
    -
    -   .md\\\\:marker-green-800::-webkit-details-marker, .md\\\\:marker-green-800::marker {
    -     color: #065f46
    -   }
    -
    -   .md\\\\:marker-green-900::-webkit-details-marker, .md\\\\:marker-green-900::marker {
    -     color: #064e3b
    -   }
    -
    -   .md\\\\:marker-blue-50::-webkit-details-marker, .md\\\\:marker-blue-50::marker {
    -     color: #eff6ff
    -   }
    -
    -   .md\\\\:marker-blue-100::-webkit-details-marker, .md\\\\:marker-blue-100::marker {
    -     color: #dbeafe
    -   }
    -
    -   .md\\\\:marker-blue-200::-webkit-details-marker, .md\\\\:marker-blue-200::marker {
    -     color: #bfdbfe
    -   }
    -
    -   .md\\\\:marker-blue-300::-webkit-details-marker, .md\\\\:marker-blue-300::marker {
    -     color: #93c5fd
    -   }
    -
    -   .md\\\\:marker-blue-400::-webkit-details-marker, .md\\\\:marker-blue-400::marker {
    -     color: #60a5fa
    -   }
    -
    -   .md\\\\:marker-blue-500::-webkit-details-marker, .md\\\\:marker-blue-500::marker {
    -     color: #3b82f6
    -   }
    -
    -   .md\\\\:marker-blue-600::-webkit-details-marker, .md\\\\:marker-blue-600::marker {
    -     color: #2563eb
    -   }
    -
    -   .md\\\\:marker-blue-700::-webkit-details-marker, .md\\\\:marker-blue-700::marker {
    -     color: #1d4ed8
    -   }
    -
    -   .md\\\\:marker-blue-800::-webkit-details-marker, .md\\\\:marker-blue-800::marker {
    -     color: #1e40af
    -   }
    -
    -   .md\\\\:marker-blue-900::-webkit-details-marker, .md\\\\:marker-blue-900::marker {
    -     color: #1e3a8a
    -   }
    -
    -   .md\\\\:marker-indigo-50::-webkit-details-marker, .md\\\\:marker-indigo-50::marker {
    -     color: #eef2ff
    -   }
    -
    -   .md\\\\:marker-indigo-100::-webkit-details-marker, .md\\\\:marker-indigo-100::marker {
    -     color: #e0e7ff
    -   }
    -
    -   .md\\\\:marker-indigo-200::-webkit-details-marker, .md\\\\:marker-indigo-200::marker {
    -     color: #c7d2fe
    -   }
    -
    -   .md\\\\:marker-indigo-300::-webkit-details-marker, .md\\\\:marker-indigo-300::marker {
    -     color: #a5b4fc
    -   }
    -
    -   .md\\\\:marker-indigo-400::-webkit-details-marker, .md\\\\:marker-indigo-400::marker {
    -     color: #818cf8
    -   }
    -
    -   .md\\\\:marker-indigo-500::-webkit-details-marker, .md\\\\:marker-indigo-500::marker {
    -     color: #6366f1
    -   }
    -
    -   .md\\\\:marker-indigo-600::-webkit-details-marker, .md\\\\:marker-indigo-600::marker {
    -     color: #4f46e5
    -   }
    -
    -   .md\\\\:marker-indigo-700::-webkit-details-marker, .md\\\\:marker-indigo-700::marker {
    -     color: #4338ca
    -   }
    -
    -   .md\\\\:marker-indigo-800::-webkit-details-marker, .md\\\\:marker-indigo-800::marker {
    -     color: #3730a3
    -   }
    -
    -   .md\\\\:marker-indigo-900::-webkit-details-marker, .md\\\\:marker-indigo-900::marker {
    -     color: #312e81
    -   }
    -
    -   .md\\\\:marker-purple-50::-webkit-details-marker, .md\\\\:marker-purple-50::marker {
    -     color: #f5f3ff
    -   }
    -
    -   .md\\\\:marker-purple-100::-webkit-details-marker, .md\\\\:marker-purple-100::marker {
    -     color: #ede9fe
    -   }
    -
    -   .md\\\\:marker-purple-200::-webkit-details-marker, .md\\\\:marker-purple-200::marker {
    -     color: #ddd6fe
    -   }
    -
    -   .md\\\\:marker-purple-300::-webkit-details-marker, .md\\\\:marker-purple-300::marker {
    -     color: #c4b5fd
    -   }
    -
    -   .md\\\\:marker-purple-400::-webkit-details-marker, .md\\\\:marker-purple-400::marker {
    -     color: #a78bfa
    -   }
    -
    -   .md\\\\:marker-purple-500::-webkit-details-marker, .md\\\\:marker-purple-500::marker {
    -     color: #8b5cf6
    -   }
    -
    -   .md\\\\:marker-purple-600::-webkit-details-marker, .md\\\\:marker-purple-600::marker {
    -     color: #7c3aed
    -   }
    -
    -   .md\\\\:marker-purple-700::-webkit-details-marker, .md\\\\:marker-purple-700::marker {
    -     color: #6d28d9
    -   }
    -
    -   .md\\\\:marker-purple-800::-webkit-details-marker, .md\\\\:marker-purple-800::marker {
    -     color: #5b21b6
    -   }
    -
    -   .md\\\\:marker-purple-900::-webkit-details-marker, .md\\\\:marker-purple-900::marker {
    -     color: #4c1d95
    -   }
    -
    -   .md\\\\:marker-pink-50::-webkit-details-marker, .md\\\\:marker-pink-50::marker {
    -     color: #fdf2f8
    -   }
    -
    -   .md\\\\:marker-pink-100::-webkit-details-marker, .md\\\\:marker-pink-100::marker {
    -     color: #fce7f3
    -   }
    -
    -   .md\\\\:marker-pink-200::-webkit-details-marker, .md\\\\:marker-pink-200::marker {
    -     color: #fbcfe8
    -   }
    -
    -   .md\\\\:marker-pink-300::-webkit-details-marker, .md\\\\:marker-pink-300::marker {
    -     color: #f9a8d4
    -   }
    -
    -   .md\\\\:marker-pink-400::-webkit-details-marker, .md\\\\:marker-pink-400::marker {
    -     color: #f472b6
    -   }
    -
    -   .md\\\\:marker-pink-500::-webkit-details-marker, .md\\\\:marker-pink-500::marker {
    -     color: #ec4899
    -   }
    -
    -   .md\\\\:marker-pink-600::-webkit-details-marker, .md\\\\:marker-pink-600::marker {
    -     color: #db2777
    -   }
    -
    -   .md\\\\:marker-pink-700::-webkit-details-marker, .md\\\\:marker-pink-700::marker {
    -     color: #be185d
    -   }
    -
    -   .md\\\\:marker-pink-800::-webkit-details-marker, .md\\\\:marker-pink-800::marker {
    -     color: #9d174d
    -   }
    -
    -   .md\\\\:marker-pink-900::-webkit-details-marker, .md\\\\:marker-pink-900::marker {
    -     color: #831843
    -   }
    - }
    -
    - @media (min-width: 1024px) {
    -   .lg\\\\:marker-current::-webkit-details-marker, .lg\\\\:marker-current::marker {
    -     color: currentColor
    -   }
    -
    -   .lg\\\\:marker-black::-webkit-details-marker, .lg\\\\:marker-black::marker {
    -     color: #000
    -   }
    -
    -   .lg\\\\:marker-white::-webkit-details-marker, .lg\\\\:marker-white::marker {
    -     color: #fff
    -   }
    -
    -   .lg\\\\:marker-gray-50::-webkit-details-marker, .lg\\\\:marker-gray-50::marker {
    -     color: #f9fafb
    -   }
    -
    -   .lg\\\\:marker-gray-100::-webkit-details-marker, .lg\\\\:marker-gray-100::marker {
    -     color: #f3f4f6
    -   }
    -
    -   .lg\\\\:marker-gray-200::-webkit-details-marker, .lg\\\\:marker-gray-200::marker {
    -     color: #e5e7eb
    -   }
    -
    -   .lg\\\\:marker-gray-300::-webkit-details-marker, .lg\\\\:marker-gray-300::marker {
    -     color: #d1d5db
    -   }
    -
    -   .lg\\\\:marker-gray-400::-webkit-details-marker, .lg\\\\:marker-gray-400::marker {
    -     color: #9ca3af
    -   }
    -
    -   .lg\\\\:marker-gray-500::-webkit-details-marker, .lg\\\\:marker-gray-500::marker {
    -     color: #6b7280
    -   }
    -
    -   .lg\\\\:marker-gray-600::-webkit-details-marker, .lg\\\\:marker-gray-600::marker {
    -     color: #4b5563
    -   }
    -
    -   .lg\\\\:marker-gray-700::-webkit-details-marker, .lg\\\\:marker-gray-700::marker {
    -     color: #374151
    -   }
    -
    -   .lg\\\\:marker-gray-800::-webkit-details-marker, .lg\\\\:marker-gray-800::marker {
    -     color: #1f2937
    -   }
    -
    -   .lg\\\\:marker-gray-900::-webkit-details-marker, .lg\\\\:marker-gray-900::marker {
    -     color: #111827
    -   }
    -
    -   .lg\\\\:marker-red-50::-webkit-details-marker, .lg\\\\:marker-red-50::marker {
    -     color: #fef2f2
    -   }
    -
    -   .lg\\\\:marker-red-100::-webkit-details-marker, .lg\\\\:marker-red-100::marker {
    -     color: #fee2e2
    -   }
    -
    -   .lg\\\\:marker-red-200::-webkit-details-marker, .lg\\\\:marker-red-200::marker {
    -     color: #fecaca
    -   }
    -
    -   .lg\\\\:marker-red-300::-webkit-details-marker, .lg\\\\:marker-red-300::marker {
    -     color: #fca5a5
    -   }
    -
    -   .lg\\\\:marker-red-400::-webkit-details-marker, .lg\\\\:marker-red-400::marker {
    -     color: #f87171
    -   }
    -
    -   .lg\\\\:marker-red-500::-webkit-details-marker, .lg\\\\:marker-red-500::marker {
    -     color: #ef4444
    -   }
    -
    -   .lg\\\\:marker-red-600::-webkit-details-marker, .lg\\\\:marker-red-600::marker {
    -     color: #dc2626
    -   }
    -
    -   .lg\\\\:marker-red-700::-webkit-details-marker, .lg\\\\:marker-red-700::marker {
    -     color: #b91c1c
    -   }
    -
    -   .lg\\\\:marker-red-800::-webkit-details-marker, .lg\\\\:marker-red-800::marker {
    -     color: #991b1b
    -   }
    -
    -   .lg\\\\:marker-red-900::-webkit-details-marker, .lg\\\\:marker-red-900::marker {
    -     color: #7f1d1d
    -   }
    -
    -   .lg\\\\:marker-yellow-50::-webkit-details-marker, .lg\\\\:marker-yellow-50::marker {
    -     color: #fffbeb
    -   }
    -
    -   .lg\\\\:marker-yellow-100::-webkit-details-marker, .lg\\\\:marker-yellow-100::marker {
    -     color: #fef3c7
    -   }
    -
    -   .lg\\\\:marker-yellow-200::-webkit-details-marker, .lg\\\\:marker-yellow-200::marker {
    -     color: #fde68a
    -   }
    -
    -   .lg\\\\:marker-yellow-300::-webkit-details-marker, .lg\\\\:marker-yellow-300::marker {
    -     color: #fcd34d
    -   }
    -
    -   .lg\\\\:marker-yellow-400::-webkit-details-marker, .lg\\\\:marker-yellow-400::marker {
    -     color: #fbbf24
    -   }
    -
    -   .lg\\\\:marker-yellow-500::-webkit-details-marker, .lg\\\\:marker-yellow-500::marker {
    -     color: #f59e0b
    -   }
    -
    -   .lg\\\\:marker-yellow-600::-webkit-details-marker, .lg\\\\:marker-yellow-600::marker {
    -     color: #d97706
    -   }
    -
    -   .lg\\\\:marker-yellow-700::-webkit-details-marker, .lg\\\\:marker-yellow-700::marker {
    -     color: #b45309
    -   }
    -
    -   .lg\\\\:marker-yellow-800::-webkit-details-marker, .lg\\\\:marker-yellow-800::marker {
    -     color: #92400e
    -   }
    -
    -   .lg\\\\:marker-yellow-900::-webkit-details-marker, .lg\\\\:marker-yellow-900::marker {
    -     color: #78350f
    -   }
    -
    -   .lg\\\\:marker-green-50::-webkit-details-marker, .lg\\\\:marker-green-50::marker {
    -     color: #ecfdf5
    -   }
    -
    -   .lg\\\\:marker-green-100::-webkit-details-marker, .lg\\\\:marker-green-100::marker {
    -     color: #d1fae5
    -   }
    -
    -   .lg\\\\:marker-green-200::-webkit-details-marker, .lg\\\\:marker-green-200::marker {
    -     color: #a7f3d0
    -   }
    -
    -   .lg\\\\:marker-green-300::-webkit-details-marker, .lg\\\\:marker-green-300::marker {
    -     color: #6ee7b7
    -   }
    -
    -   .lg\\\\:marker-green-400::-webkit-details-marker, .lg\\\\:marker-green-400::marker {
    -     color: #34d399
    -   }
    -
    -   .lg\\\\:marker-green-500::-webkit-details-marker, .lg\\\\:marker-green-500::marker {
    -     color: #10b981
    -   }
    -
    -   .lg\\\\:marker-green-600::-webkit-details-marker, .lg\\\\:marker-green-600::marker {
    -     color: #059669
    -   }
    -
    -   .lg\\\\:marker-green-700::-webkit-details-marker, .lg\\\\:marker-green-700::marker {
    -     color: #047857
    -   }
    -
    -   .lg\\\\:marker-green-800::-webkit-details-marker, .lg\\\\:marker-green-800::marker {
    -     color: #065f46
    -   }
    -
    -   .lg\\\\:marker-green-900::-webkit-details-marker, .lg\\\\:marker-green-900::marker {
    -     color: #064e3b
    -   }
    -
    -   .lg\\\\:marker-blue-50::-webkit-details-marker, .lg\\\\:marker-blue-50::marker {
    -     color: #eff6ff
    -   }
    -
    -   .lg\\\\:marker-blue-100::-webkit-details-marker, .lg\\\\:marker-blue-100::marker {
    -     color: #dbeafe
    -   }
    -
    -   .lg\\\\:marker-blue-200::-webkit-details-marker, .lg\\\\:marker-blue-200::marker {
    -     color: #bfdbfe
    -   }
    -
    -   .lg\\\\:marker-blue-300::-webkit-details-marker, .lg\\\\:marker-blue-300::marker {
    -     color: #93c5fd
    -   }
    -
    -   .lg\\\\:marker-blue-400::-webkit-details-marker, .lg\\\\:marker-blue-400::marker {
    -     color: #60a5fa
    -   }
    -
    -   .lg\\\\:marker-blue-500::-webkit-details-marker, .lg\\\\:marker-blue-500::marker {
    -     color: #3b82f6
    -   }
    -
    -   .lg\\\\:marker-blue-600::-webkit-details-marker, .lg\\\\:marker-blue-600::marker {
    -     color: #2563eb
    -   }
    -
    -   .lg\\\\:marker-blue-700::-webkit-details-marker, .lg\\\\:marker-blue-700::marker {
    -     color: #1d4ed8
    -   }
    -
    -   .lg\\\\:marker-blue-800::-webkit-details-marker, .lg\\\\:marker-blue-800::marker {
    -     color: #1e40af
    -   }
    -
    -   .lg\\\\:marker-blue-900::-webkit-details-marker, .lg\\\\:marker-blue-900::marker {
    -     color: #1e3a8a
    -   }
    -
    -   .lg\\\\:marker-indigo-50::-webkit-details-marker, .lg\\\\:marker-indigo-50::marker {
    -     color: #eef2ff
    -   }
    -
    -   .lg\\\\:marker-indigo-100::-webkit-details-marker, .lg\\\\:marker-indigo-100::marker {
    -     color: #e0e7ff
    -   }
    -
    -   .lg\\\\:marker-indigo-200::-webkit-details-marker, .lg\\\\:marker-indigo-200::marker {
    -     color: #c7d2fe
    -   }
    -
    -   .lg\\\\:marker-indigo-300::-webkit-details-marker, .lg\\\\:marker-indigo-300::marker {
    -     color: #a5b4fc
    -   }
    -
    -   .lg\\\\:marker-indigo-400::-webkit-details-marker, .lg\\\\:marker-indigo-400::marker {
    -     color: #818cf8
    -   }
    -
    -   .lg\\\\:marker-indigo-500::-webkit-details-marker, .lg\\\\:marker-indigo-500::marker {
    -     color: #6366f1
    -   }
    -
    -   .lg\\\\:marker-indigo-600::-webkit-details-marker, .lg\\\\:marker-indigo-600::marker {
    -     color: #4f46e5
    -   }
    -
    -   .lg\\\\:marker-indigo-700::-webkit-details-marker, .lg\\\\:marker-indigo-700::marker {
    -     color: #4338ca
    -   }
    -
    -   .lg\\\\:marker-indigo-800::-webkit-details-marker, .lg\\\\:marker-indigo-800::marker {
    -     color: #3730a3
    -   }
    -
    -   .lg\\\\:marker-indigo-900::-webkit-details-marker, .lg\\\\:marker-indigo-900::marker {
    -     color: #312e81
    -   }
    -
    -   .lg\\\\:marker-purple-50::-webkit-details-marker, .lg\\\\:marker-purple-50::marker {
    -     color: #f5f3ff
    -   }
    -
    -   .lg\\\\:marker-purple-100::-webkit-details-marker, .lg\\\\:marker-purple-100::marker {
    -     color: #ede9fe
    -   }
    -
    -   .lg\\\\:marker-purple-200::-webkit-details-marker, .lg\\\\:marker-purple-200::marker {
    -     color: #ddd6fe
    -   }
    -
    -   .lg\\\\:marker-purple-300::-webkit-details-marker, .lg\\\\:marker-purple-300::marker {
    -     color: #c4b5fd
    -   }
    -
    -   .lg\\\\:marker-purple-400::-webkit-details-marker, .lg\\\\:marker-purple-400::marker {
    -     color: #a78bfa
    -   }
    -
    -   .lg\\\\:marker-purple-500::-webkit-details-marker, .lg\\\\:marker-purple-500::marker {
    -     color: #8b5cf6
    -   }
    -
    -   .lg\\\\:marker-purple-600::-webkit-details-marker, .lg\\\\:marker-purple-600::marker {
    -     color: #7c3aed
    -   }
    -
    -   .lg\\\\:marker-purple-700::-webkit-details-marker, .lg\\\\:marker-purple-700::marker {
    -     color: #6d28d9
    -   }
    -
    -   .lg\\\\:marker-purple-800::-webkit-details-marker, .lg\\\\:marker-purple-800::marker {
    -     color: #5b21b6
    -   }
    -
    -   .lg\\\\:marker-purple-900::-webkit-details-marker, .lg\\\\:marker-purple-900::marker {
    -     color: #4c1d95
    -   }
    -
    -   .lg\\\\:marker-pink-50::-webkit-details-marker, .lg\\\\:marker-pink-50::marker {
    -     color: #fdf2f8
    -   }
    -
    -   .lg\\\\:marker-pink-100::-webkit-details-marker, .lg\\\\:marker-pink-100::marker {
    -     color: #fce7f3
    -   }
    -
    -   .lg\\\\:marker-pink-200::-webkit-details-marker, .lg\\\\:marker-pink-200::marker {
    -     color: #fbcfe8
    -   }
    -
    -   .lg\\\\:marker-pink-300::-webkit-details-marker, .lg\\\\:marker-pink-300::marker {
    -     color: #f9a8d4
    -   }
    -
    -   .lg\\\\:marker-pink-400::-webkit-details-marker, .lg\\\\:marker-pink-400::marker {
    -     color: #f472b6
    -   }
    -
    -   .lg\\\\:marker-pink-500::-webkit-details-marker, .lg\\\\:marker-pink-500::marker {
    -     color: #ec4899
    -   }
    -
    -   .lg\\\\:marker-pink-600::-webkit-details-marker, .lg\\\\:marker-pink-600::marker {
    -     color: #db2777
    -   }
    -
    -   .lg\\\\:marker-pink-700::-webkit-details-marker, .lg\\\\:marker-pink-700::marker {
    -     color: #be185d
    -   }
    -
    -   .lg\\\\:marker-pink-800::-webkit-details-marker, .lg\\\\:marker-pink-800::marker {
    -     color: #9d174d
    -   }
    -
    -   .lg\\\\:marker-pink-900::-webkit-details-marker, .lg\\\\:marker-pink-900::marker {
    -     color: #831843
    -   }
    - }
    -
    - @media (min-width: 1280px) {
    -   .xl\\\\:marker-current::-webkit-details-marker, .xl\\\\:marker-current::marker {
    -     color: currentColor
    -   }
    -
    -   .xl\\\\:marker-black::-webkit-details-marker, .xl\\\\:marker-black::marker {
    -     color: #000
    -   }
    -
    -   .xl\\\\:marker-white::-webkit-details-marker, .xl\\\\:marker-white::marker {
    -     color: #fff
    -   }
    -
    -   .xl\\\\:marker-gray-50::-webkit-details-marker, .xl\\\\:marker-gray-50::marker {
    -     color: #f9fafb
    -   }
    -
    -   .xl\\\\:marker-gray-100::-webkit-details-marker, .xl\\\\:marker-gray-100::marker {
    -     color: #f3f4f6
    -   }
    -
    -   .xl\\\\:marker-gray-200::-webkit-details-marker, .xl\\\\:marker-gray-200::marker {
    -     color: #e5e7eb
    -   }
    -
    -   .xl\\\\:marker-gray-300::-webkit-details-marker, .xl\\\\:marker-gray-300::marker {
    -     color: #d1d5db
    -   }
    -
    -   .xl\\\\:marker-gray-400::-webkit-details-marker, .xl\\\\:marker-gray-400::marker {
    -     color: #9ca3af
    -   }
    -
    -   .xl\\\\:marker-gray-500::-webkit-details-marker, .xl\\\\:marker-gray-500::marker {
    -     color: #6b7280
    -   }
    -
    -   .xl\\\\:marker-gray-600::-webkit-details-marker, .xl\\\\:marker-gray-600::marker {
    -     color: #4b5563
    -   }
    -
    -   .xl\\\\:marker-gray-700::-webkit-details-marker, .xl\\\\:marker-gray-700::marker {
    -     color: #374151
    -   }
    -
    -   .xl\\\\:marker-gray-800::-webkit-details-marker, .xl\\\\:marker-gray-800::marker {
    -     color: #1f2937
    -   }
    -
    -   .xl\\\\:marker-gray-900::-webkit-details-marker, .xl\\\\:marker-gray-900::marker {
    -     color: #111827
    -   }
    -
    -   .xl\\\\:marker-red-50::-webkit-details-marker, .xl\\\\:marker-red-50::marker {
    -     color: #fef2f2
    -   }
    -
    -   .xl\\\\:marker-red-100::-webkit-details-marker, .xl\\\\:marker-red-100::marker {
    -     color: #fee2e2
    -   }
    -
    -   .xl\\\\:marker-red-200::-webkit-details-marker, .xl\\\\:marker-red-200::marker {
    -     color: #fecaca
    -   }
    -
    -   .xl\\\\:marker-red-300::-webkit-details-marker, .xl\\\\:marker-red-300::marker {
    -     color: #fca5a5
    -   }
    -
    -   .xl\\\\:marker-red-400::-webkit-details-marker, .xl\\\\:marker-red-400::marker {
    -     color: #f87171
    -   }
    -
    -   .xl\\\\:marker-red-500::-webkit-details-marker, .xl\\\\:marker-red-500::marker {
    -     color: #ef4444
    -   }
    -
    -   .xl\\\\:marker-red-600::-webkit-details-marker, .xl\\\\:marker-red-600::marker {
    -     color: #dc2626
    -   }
    -
    -   .xl\\\\:marker-red-700::-webkit-details-marker, .xl\\\\:marker-red-700::marker {
    -     color: #b91c1c
    -   }
    -
    -   .xl\\\\:marker-red-800::-webkit-details-marker, .xl\\\\:marker-red-800::marker {
    -     color: #991b1b
    -   }
    -
    -   .xl\\\\:marker-red-900::-webkit-details-marker, .xl\\\\:marker-red-900::marker {
    -     color: #7f1d1d
    -   }
    -
    -   .xl\\\\:marker-yellow-50::-webkit-details-marker, .xl\\\\:marker-yellow-50::marker {
    -     color: #fffbeb
    -   }
    -
    -   .xl\\\\:marker-yellow-100::-webkit-details-marker, .xl\\\\:marker-yellow-100::marker {
    -     color: #fef3c7
    -   }
    -
    -   .xl\\\\:marker-yellow-200::-webkit-details-marker, .xl\\\\:marker-yellow-200::marker {
    -     color: #fde68a
    -   }
    -
    -   .xl\\\\:marker-yellow-300::-webkit-details-marker, .xl\\\\:marker-yellow-300::marker {
    -     color: #fcd34d
    -   }
    -
    -   .xl\\\\:marker-yellow-400::-webkit-details-marker, .xl\\\\:marker-yellow-400::marker {
    -     color: #fbbf24
    -   }
    -
    -   .xl\\\\:marker-yellow-500::-webkit-details-marker, .xl\\\\:marker-yellow-500::marker {
    -     color: #f59e0b
    -   }
    -
    -   .xl\\\\:marker-yellow-600::-webkit-details-marker, .xl\\\\:marker-yellow-600::marker {
    -     color: #d97706
    -   }
    -
    -   .xl\\\\:marker-yellow-700::-webkit-details-marker, .xl\\\\:marker-yellow-700::marker {
    -     color: #b45309
    -   }
    -
    -   .xl\\\\:marker-yellow-800::-webkit-details-marker, .xl\\\\:marker-yellow-800::marker {
    -     color: #92400e
    -   }
    -
    -   .xl\\\\:marker-yellow-900::-webkit-details-marker, .xl\\\\:marker-yellow-900::marker {
    -     color: #78350f
    -   }
    -
    -   .xl\\\\:marker-green-50::-webkit-details-marker, .xl\\\\:marker-green-50::marker {
    -     color: #ecfdf5
    -   }
    -
    -   .xl\\\\:marker-green-100::-webkit-details-marker, .xl\\\\:marker-green-100::marker {
    -     color: #d1fae5
    -   }
    -
    -   .xl\\\\:marker-green-200::-webkit-details-marker, .xl\\\\:marker-green-200::marker {
    -     color: #a7f3d0
    -   }
    -
    -   .xl\\\\:marker-green-300::-webkit-details-marker, .xl\\\\:marker-green-300::marker {
    -     color: #6ee7b7
    -   }
    -
    -   .xl\\\\:marker-green-400::-webkit-details-marker, .xl\\\\:marker-green-400::marker {
    -     color: #34d399
    -   }
    -
    -   .xl\\\\:marker-green-500::-webkit-details-marker, .xl\\\\:marker-green-500::marker {
    -     color: #10b981
    -   }
    -
    -   .xl\\\\:marker-green-600::-webkit-details-marker, .xl\\\\:marker-green-600::marker {
    -     color: #059669
    -   }
    -
    -   .xl\\\\:marker-green-700::-webkit-details-marker, .xl\\\\:marker-green-700::marker {
    -     color: #047857
    -   }
    -
    -   .xl\\\\:marker-green-800::-webkit-details-marker, .xl\\\\:marker-green-800::marker {
    -     color: #065f46
    -   }
    -
    -   .xl\\\\:marker-green-900::-webkit-details-marker, .xl\\\\:marker-green-900::marker {
    -     color: #064e3b
    -   }
    -
    -   .xl\\\\:marker-blue-50::-webkit-details-marker, .xl\\\\:marker-blue-50::marker {
    -     color: #eff6ff
    -   }
    -
    -   .xl\\\\:marker-blue-100::-webkit-details-marker, .xl\\\\:marker-blue-100::marker {
    -     color: #dbeafe
    -   }
    -
    -   .xl\\\\:marker-blue-200::-webkit-details-marker, .xl\\\\:marker-blue-200::marker {
    -     color: #bfdbfe
    -   }
    -
    -   .xl\\\\:marker-blue-300::-webkit-details-marker, .xl\\\\:marker-blue-300::marker {
    -     color: #93c5fd
    -   }
    -
    -   .xl\\\\:marker-blue-400::-webkit-details-marker, .xl\\\\:marker-blue-400::marker {
    -     color: #60a5fa
    -   }
    -
    -   .xl\\\\:marker-blue-500::-webkit-details-marker, .xl\\\\:marker-blue-500::marker {
    -     color: #3b82f6
    -   }
    -
    -   .xl\\\\:marker-blue-600::-webkit-details-marker, .xl\\\\:marker-blue-600::marker {
    -     color: #2563eb
    -   }
    -
    -   .xl\\\\:marker-blue-700::-webkit-details-marker, .xl\\\\:marker-blue-700::marker {
    -     color: #1d4ed8
    -   }
    -
    -   .xl\\\\:marker-blue-800::-webkit-details-marker, .xl\\\\:marker-blue-800::marker {
    -     color: #1e40af
    -   }
    -
    -   .xl\\\\:marker-blue-900::-webkit-details-marker, .xl\\\\:marker-blue-900::marker {
    -     color: #1e3a8a
    -   }
    -
    -   .xl\\\\:marker-indigo-50::-webkit-details-marker, .xl\\\\:marker-indigo-50::marker {
    -     color: #eef2ff
    -   }
    -
    -   .xl\\\\:marker-indigo-100::-webkit-details-marker, .xl\\\\:marker-indigo-100::marker {
    -     color: #e0e7ff
    -   }
    -
    -   .xl\\\\:marker-indigo-200::-webkit-details-marker, .xl\\\\:marker-indigo-200::marker {
    -     color: #c7d2fe
    -   }
    -
    -   .xl\\\\:marker-indigo-300::-webkit-details-marker, .xl\\\\:marker-indigo-300::marker {
    -     color: #a5b4fc
    -   }
    -
    -   .xl\\\\:marker-indigo-400::-webkit-details-marker, .xl\\\\:marker-indigo-400::marker {
    -     color: #818cf8
    -   }
    -
    -   .xl\\\\:marker-indigo-500::-webkit-details-marker, .xl\\\\:marker-indigo-500::marker {
    -     color: #6366f1
    -   }
    -
    -   .xl\\\\:marker-indigo-600::-webkit-details-marker, .xl\\\\:marker-indigo-600::marker {
    -     color: #4f46e5
    -   }
    -
    -   .xl\\\\:marker-indigo-700::-webkit-details-marker, .xl\\\\:marker-indigo-700::marker {
    -     color: #4338ca
    -   }
    -
    -   .xl\\\\:marker-indigo-800::-webkit-details-marker, .xl\\\\:marker-indigo-800::marker {
    -     color: #3730a3
    -   }
    -
    -   .xl\\\\:marker-indigo-900::-webkit-details-marker, .xl\\\\:marker-indigo-900::marker {
    -     color: #312e81
    -   }
    -
    -   .xl\\\\:marker-purple-50::-webkit-details-marker, .xl\\\\:marker-purple-50::marker {
    -     color: #f5f3ff
    -   }
    -
    -   .xl\\\\:marker-purple-100::-webkit-details-marker, .xl\\\\:marker-purple-100::marker {
    -     color: #ede9fe
    -   }
    -
    -   .xl\\\\:marker-purple-200::-webkit-details-marker, .xl\\\\:marker-purple-200::marker {
    -     color: #ddd6fe
    -   }
    -
    -   .xl\\\\:marker-purple-300::-webkit-details-marker, .xl\\\\:marker-purple-300::marker {
    -     color: #c4b5fd
    -   }
    -
    -   .xl\\\\:marker-purple-400::-webkit-details-marker, .xl\\\\:marker-purple-400::marker {
    -     color: #a78bfa
    -   }
    -
    -   .xl\\\\:marker-purple-500::-webkit-details-marker, .xl\\\\:marker-purple-500::marker {
    -     color: #8b5cf6
    -   }
    -
    -   .xl\\\\:marker-purple-600::-webkit-details-marker, .xl\\\\:marker-purple-600::marker {
    -     color: #7c3aed
    -   }
    -
    -   .xl\\\\:marker-purple-700::-webkit-details-marker, .xl\\\\:marker-purple-700::marker {
    -     color: #6d28d9
    -   }
    -
    -   .xl\\\\:marker-purple-800::-webkit-details-marker, .xl\\\\:marker-purple-800::marker {
    -     color: #5b21b6
    -   }
    -
    -   .xl\\\\:marker-purple-900::-webkit-details-marker, .xl\\\\:marker-purple-900::marker {
    -     color: #4c1d95
    -   }
    -
    -   .xl\\\\:marker-pink-50::-webkit-details-marker, .xl\\\\:marker-pink-50::marker {
    -     color: #fdf2f8
    -   }
    -
    -   .xl\\\\:marker-pink-100::-webkit-details-marker, .xl\\\\:marker-pink-100::marker {
    -     color: #fce7f3
    -   }
    -
    -   .xl\\\\:marker-pink-200::-webkit-details-marker, .xl\\\\:marker-pink-200::marker {
    -     color: #fbcfe8
    -   }
    -
    -   .xl\\\\:marker-pink-300::-webkit-details-marker, .xl\\\\:marker-pink-300::marker {
    -     color: #f9a8d4
    -   }
    -
    -   .xl\\\\:marker-pink-400::-webkit-details-marker, .xl\\\\:marker-pink-400::marker {
    -     color: #f472b6
    -   }
    -
    -   .xl\\\\:marker-pink-500::-webkit-details-marker, .xl\\\\:marker-pink-500::marker {
    -     color: #ec4899
    -   }
    -
    -   .xl\\\\:marker-pink-600::-webkit-details-marker, .xl\\\\:marker-pink-600::marker {
    -     color: #db2777
    -   }
    -
    -   .xl\\\\:marker-pink-700::-webkit-details-marker, .xl\\\\:marker-pink-700::marker {
    -     color: #be185d
    -   }
    -
    -   .xl\\\\:marker-pink-800::-webkit-details-marker, .xl\\\\:marker-pink-800::marker {
    -     color: #9d174d
    -   }
    -
    -   .xl\\\\:marker-pink-900::-webkit-details-marker, .xl\\\\:marker-pink-900::marker {
    -     color: #831843
    -   }
    - }
    -
    - @media (min-width: 1536px) {
    -   .\\\\32xl\\\\:marker-current::-webkit-details-marker, .\\\\32xl\\\\:marker-current::marker {
    -     color: currentColor
    -   }
    -
    -   .\\\\32xl\\\\:marker-black::-webkit-details-marker, .\\\\32xl\\\\:marker-black::marker {
    -     color: #000
    -   }
    -
    -   .\\\\32xl\\\\:marker-white::-webkit-details-marker, .\\\\32xl\\\\:marker-white::marker {
    -     color: #fff
    -   }
    -
    -   .\\\\32xl\\\\:marker-gray-50::-webkit-details-marker, .\\\\32xl\\\\:marker-gray-50::marker {
    -     color: #f9fafb
    -   }
    -
    -   .\\\\32xl\\\\:marker-gray-100::-webkit-details-marker, .\\\\32xl\\\\:marker-gray-100::marker {
    -     color: #f3f4f6
    -   }
    -
    -   .\\\\32xl\\\\:marker-gray-200::-webkit-details-marker, .\\\\32xl\\\\:marker-gray-200::marker {
    -     color: #e5e7eb
    -   }
    -
    -   .\\\\32xl\\\\:marker-gray-300::-webkit-details-marker, .\\\\32xl\\\\:marker-gray-300::marker {
    -     color: #d1d5db
    -   }
    -
    -   .\\\\32xl\\\\:marker-gray-400::-webkit-details-marker, .\\\\32xl\\\\:marker-gray-400::marker {
    -     color: #9ca3af
    -   }
    -
    -   .\\\\32xl\\\\:marker-gray-500::-webkit-details-marker, .\\\\32xl\\\\:marker-gray-500::marker {
    -     color: #6b7280
    -   }
    -
    -   .\\\\32xl\\\\:marker-gray-600::-webkit-details-marker, .\\\\32xl\\\\:marker-gray-600::marker {
    -     color: #4b5563
    -   }
    -
    -   .\\\\32xl\\\\:marker-gray-700::-webkit-details-marker, .\\\\32xl\\\\:marker-gray-700::marker {
    -     color: #374151
    -   }
    -
    -   .\\\\32xl\\\\:marker-gray-800::-webkit-details-marker, .\\\\32xl\\\\:marker-gray-800::marker {
    -     color: #1f2937
    -   }
    -
    -   .\\\\32xl\\\\:marker-gray-900::-webkit-details-marker, .\\\\32xl\\\\:marker-gray-900::marker {
    -     color: #111827
    -   }
    -
    -   .\\\\32xl\\\\:marker-red-50::-webkit-details-marker, .\\\\32xl\\\\:marker-red-50::marker {
    -     color: #fef2f2
    -   }
    -
    -   .\\\\32xl\\\\:marker-red-100::-webkit-details-marker, .\\\\32xl\\\\:marker-red-100::marker {
    -     color: #fee2e2
    -   }
    -
    -   .\\\\32xl\\\\:marker-red-200::-webkit-details-marker, .\\\\32xl\\\\:marker-red-200::marker {
    -     color: #fecaca
    -   }
    -
    -   .\\\\32xl\\\\:marker-red-300::-webkit-details-marker, .\\\\32xl\\\\:marker-red-300::marker {
    -     color: #fca5a5
    -   }
    -
    -   .\\\\32xl\\\\:marker-red-400::-webkit-details-marker, .\\\\32xl\\\\:marker-red-400::marker {
    -     color: #f87171
    -   }
    -
    -   .\\\\32xl\\\\:marker-red-500::-webkit-details-marker, .\\\\32xl\\\\:marker-red-500::marker {
    -     color: #ef4444
    -   }
    -
    -   .\\\\32xl\\\\:marker-red-600::-webkit-details-marker, .\\\\32xl\\\\:marker-red-600::marker {
    -     color: #dc2626
    -   }
    -
    -   .\\\\32xl\\\\:marker-red-700::-webkit-details-marker, .\\\\32xl\\\\:marker-red-700::marker {
    -     color: #b91c1c
    -   }
    -
    -   .\\\\32xl\\\\:marker-red-800::-webkit-details-marker, .\\\\32xl\\\\:marker-red-800::marker {
    -     color: #991b1b
    -   }
    -
    -   .\\\\32xl\\\\:marker-red-900::-webkit-details-marker, .\\\\32xl\\\\:marker-red-900::marker {
    -     color: #7f1d1d
    -   }
    -
    -   .\\\\32xl\\\\:marker-yellow-50::-webkit-details-marker, .\\\\32xl\\\\:marker-yellow-50::marker {
    -     color: #fffbeb
    -   }
    -
    -   .\\\\32xl\\\\:marker-yellow-100::-webkit-details-marker, .\\\\32xl\\\\:marker-yellow-100::marker {
    -     color: #fef3c7
    -   }
    -
    -   .\\\\32xl\\\\:marker-yellow-200::-webkit-details-marker, .\\\\32xl\\\\:marker-yellow-200::marker {
    -     color: #fde68a
    -   }
    -
    -   .\\\\32xl\\\\:marker-yellow-300::-webkit-details-marker, .\\\\32xl\\\\:marker-yellow-300::marker {
    -     color: #fcd34d
    -   }
    -
    -   .\\\\32xl\\\\:marker-yellow-400::-webkit-details-marker, .\\\\32xl\\\\:marker-yellow-400::marker {
    -     color: #fbbf24
    -   }
    -
    -   .\\\\32xl\\\\:marker-yellow-500::-webkit-details-marker, .\\\\32xl\\\\:marker-yellow-500::marker {
    -     color: #f59e0b
    -   }
    -
    -   .\\\\32xl\\\\:marker-yellow-600::-webkit-details-marker, .\\\\32xl\\\\:marker-yellow-600::marker {
    -     color: #d97706
    -   }
    -
    -   .\\\\32xl\\\\:marker-yellow-700::-webkit-details-marker, .\\\\32xl\\\\:marker-yellow-700::marker {
    -     color: #b45309
    -   }
    -
    -   .\\\\32xl\\\\:marker-yellow-800::-webkit-details-marker, .\\\\32xl\\\\:marker-yellow-800::marker {
    -     color: #92400e
    -   }
    -
    -   .\\\\32xl\\\\:marker-yellow-900::-webkit-details-marker, .\\\\32xl\\\\:marker-yellow-900::marker {
    -     color: #78350f
    -   }
    -
    -   .\\\\32xl\\\\:marker-green-50::-webkit-details-marker, .\\\\32xl\\\\:marker-green-50::marker {
    -     color: #ecfdf5
    -   }
    -
    -   .\\\\32xl\\\\:marker-green-100::-webkit-details-marker, .\\\\32xl\\\\:marker-green-100::marker {
    -     color: #d1fae5
    -   }
    -
    -   .\\\\32xl\\\\:marker-green-200::-webkit-details-marker, .\\\\32xl\\\\:marker-green-200::marker {
    -     color: #a7f3d0
    -   }
    -
    -   .\\\\32xl\\\\:marker-green-300::-webkit-details-marker, .\\\\32xl\\\\:marker-green-300::marker {
    -     color: #6ee7b7
    -   }
    -
    -   .\\\\32xl\\\\:marker-green-400::-webkit-details-marker, .\\\\32xl\\\\:marker-green-400::marker {
    -     color: #34d399
    -   }
    -
    -   .\\\\32xl\\\\:marker-green-500::-webkit-details-marker, .\\\\32xl\\\\:marker-green-500::marker {
    -     color: #10b981
    -   }
    -
    -   .\\\\32xl\\\\:marker-green-600::-webkit-details-marker, .\\\\32xl\\\\:marker-green-600::marker {
    -     color: #059669
    -   }
    -
    -   .\\\\32xl\\\\:marker-green-700::-webkit-details-marker, .\\\\32xl\\\\:marker-green-700::marker {
    -     color: #047857
    -   }
    -
    -   .\\\\32xl\\\\:marker-green-800::-webkit-details-marker, .\\\\32xl\\\\:marker-green-800::marker {
    -     color: #065f46
    -   }
    -
    -   .\\\\32xl\\\\:marker-green-900::-webkit-details-marker, .\\\\32xl\\\\:marker-green-900::marker {
    -     color: #064e3b
    -   }
    -
    -   .\\\\32xl\\\\:marker-blue-50::-webkit-details-marker, .\\\\32xl\\\\:marker-blue-50::marker {
    -     color: #eff6ff
    -   }
    -
    -   .\\\\32xl\\\\:marker-blue-100::-webkit-details-marker, .\\\\32xl\\\\:marker-blue-100::marker {
    -     color: #dbeafe
    -   }
    -
    -   .\\\\32xl\\\\:marker-blue-200::-webkit-details-marker, .\\\\32xl\\\\:marker-blue-200::marker {
    -     color: #bfdbfe
    -   }
    -
    -   .\\\\32xl\\\\:marker-blue-300::-webkit-details-marker, .\\\\32xl\\\\:marker-blue-300::marker {
    -     color: #93c5fd
    -   }
    -
    -   .\\\\32xl\\\\:marker-blue-400::-webkit-details-marker, .\\\\32xl\\\\:marker-blue-400::marker {
    -     color: #60a5fa
    -   }
    -
    -   .\\\\32xl\\\\:marker-blue-500::-webkit-details-marker, .\\\\32xl\\\\:marker-blue-500::marker {
    -     color: #3b82f6
    -   }
    -
    -   .\\\\32xl\\\\:marker-blue-600::-webkit-details-marker, .\\\\32xl\\\\:marker-blue-600::marker {
    -     color: #2563eb
    -   }
    -
    -   .\\\\32xl\\\\:marker-blue-700::-webkit-details-marker, .\\\\32xl\\\\:marker-blue-700::marker {
    -     color: #1d4ed8
    -   }
    -
    -   .\\\\32xl\\\\:marker-blue-800::-webkit-details-marker, .\\\\32xl\\\\:marker-blue-800::marker {
    -     color: #1e40af
    -   }
    -
    -   .\\\\32xl\\\\:marker-blue-900::-webkit-details-marker, .\\\\32xl\\\\:marker-blue-900::marker {
    -     color: #1e3a8a
    -   }
    -
    -   .\\\\32xl\\\\:marker-indigo-50::-webkit-details-marker, .\\\\32xl\\\\:marker-indigo-50::marker {
    -     color: #eef2ff
    -   }
    -
    -   .\\\\32xl\\\\:marker-indigo-100::-webkit-details-marker, .\\\\32xl\\\\:marker-indigo-100::marker {
    -     color: #e0e7ff
    -   }
    -
    -   .\\\\32xl\\\\:marker-indigo-200::-webkit-details-marker, .\\\\32xl\\\\:marker-indigo-200::marker {
    -     color: #c7d2fe
    -   }
    -
    -   .\\\\32xl\\\\:marker-indigo-300::-webkit-details-marker, .\\\\32xl\\\\:marker-indigo-300::marker {
    -     color: #a5b4fc
    -   }
    -
    -   .\\\\32xl\\\\:marker-indigo-400::-webkit-details-marker, .\\\\32xl\\\\:marker-indigo-400::marker {
    -     color: #818cf8
    -   }
    -
    -   .\\\\32xl\\\\:marker-indigo-500::-webkit-details-marker, .\\\\32xl\\\\:marker-indigo-500::marker {
    -     color: #6366f1
    -   }
    -
    -   .\\\\32xl\\\\:marker-indigo-600::-webkit-details-marker, .\\\\32xl\\\\:marker-indigo-600::marker {
    -     color: #4f46e5
    -   }
    -
    -   .\\\\32xl\\\\:marker-indigo-700::-webkit-details-marker, .\\\\32xl\\\\:marker-indigo-700::marker {
    -     color: #4338ca
    -   }
    -
    -   .\\\\32xl\\\\:marker-indigo-800::-webkit-details-marker, .\\\\32xl\\\\:marker-indigo-800::marker {
    -     color: #3730a3
    -   }
    -
    -   .\\\\32xl\\\\:marker-indigo-900::-webkit-details-marker, .\\\\32xl\\\\:marker-indigo-900::marker {
    -     color: #312e81
    -   }
    -
    -   .\\\\32xl\\\\:marker-purple-50::-webkit-details-marker, .\\\\32xl\\\\:marker-purple-50::marker {
    -     color: #f5f3ff
    -   }
    -
    -   .\\\\32xl\\\\:marker-purple-100::-webkit-details-marker, .\\\\32xl\\\\:marker-purple-100::marker {
    -     color: #ede9fe
    -   }
    -
    -   .\\\\32xl\\\\:marker-purple-200::-webkit-details-marker, .\\\\32xl\\\\:marker-purple-200::marker {
    -     color: #ddd6fe
    -   }
    -
    -   .\\\\32xl\\\\:marker-purple-300::-webkit-details-marker, .\\\\32xl\\\\:marker-purple-300::marker {
    -     color: #c4b5fd
    -   }
    -
    -   .\\\\32xl\\\\:marker-purple-400::-webkit-details-marker, .\\\\32xl\\\\:marker-purple-400::marker {
    -     color: #a78bfa
    -   }
    -
    -   .\\\\32xl\\\\:marker-purple-500::-webkit-details-marker, .\\\\32xl\\\\:marker-purple-500::marker {
    -     color: #8b5cf6
    -   }
    -
    -   .\\\\32xl\\\\:marker-purple-600::-webkit-details-marker, .\\\\32xl\\\\:marker-purple-600::marker {
    -     color: #7c3aed
    -   }
    -
    -   .\\\\32xl\\\\:marker-purple-700::-webkit-details-marker, .\\\\32xl\\\\:marker-purple-700::marker {
    -     color: #6d28d9
    -   }
    -
    -   .\\\\32xl\\\\:marker-purple-800::-webkit-details-marker, .\\\\32xl\\\\:marker-purple-800::marker {
    -     color: #5b21b6
    -   }
    -
    -   .\\\\32xl\\\\:marker-purple-900::-webkit-details-marker, .\\\\32xl\\\\:marker-purple-900::marker {
    -     color: #4c1d95
    -   }
    -
    -   .\\\\32xl\\\\:marker-pink-50::-webkit-details-marker, .\\\\32xl\\\\:marker-pink-50::marker {
    -     color: #fdf2f8
    -   }
    -
    -   .\\\\32xl\\\\:marker-pink-100::-webkit-details-marker, .\\\\32xl\\\\:marker-pink-100::marker {
    -     color: #fce7f3
    -   }
    -
    -   .\\\\32xl\\\\:marker-pink-200::-webkit-details-marker, .\\\\32xl\\\\:marker-pink-200::marker {
    -     color: #fbcfe8
    -   }
    -
    -   .\\\\32xl\\\\:marker-pink-300::-webkit-details-marker, .\\\\32xl\\\\:marker-pink-300::marker {
    -     color: #f9a8d4
    -   }
    -
    -   .\\\\32xl\\\\:marker-pink-400::-webkit-details-marker, .\\\\32xl\\\\:marker-pink-400::marker {
    -     color: #f472b6
    -   }
    -
    -   .\\\\32xl\\\\:marker-pink-500::-webkit-details-marker, .\\\\32xl\\\\:marker-pink-500::marker {
    -     color: #ec4899
    -   }
    -
    -   .\\\\32xl\\\\:marker-pink-600::-webkit-details-marker, .\\\\32xl\\\\:marker-pink-600::marker {
    -     color: #db2777
    -   }
    -
    -   .\\\\32xl\\\\:marker-pink-700::-webkit-details-marker, .\\\\32xl\\\\:marker-pink-700::marker {
    -     color: #be185d
    -   }
    -
    -   .\\\\32xl\\\\:marker-pink-800::-webkit-details-marker, .\\\\32xl\\\\:marker-pink-800::marker {
    -     color: #9d174d
    -   }
    -
    -   .\\\\32xl\\\\:marker-pink-900::-webkit-details-marker, .\\\\32xl\\\\:marker-pink-900::marker {

    "
  `);
});
