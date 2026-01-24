/**
 * Sveltia CMS customization entrypoint (ES module).
 *
 * Import the ESM build of Sveltia CMS in `admin/index.html`, then call
 * `initCms(CMS)` from there so we can register customizations before init().
 *
 * Docs:
 * - Manual init: https://sveltiacms.app/en/docs/api/initialization
 * - Editor components: https://sveltiacms.app/en/docs/api/editor-components
 */

export default function initCms(CMS) {
  // Allow calling without passing the instance, but prefer explicit injection.
  const cms = CMS ?? window.CMS;

  if (!cms) {
    console.error("[cms-init] CMS is not available (Sveltia CMS not loaded).");
    return;
  }

  CMS.registerEditorComponent({
    id: 'more',
    label: 'More',
    icon: 'content_cut',
    fields: [],
    pattern: /<!--more-->/m,
    toBlock: () =>
      `<!--more-->`,
    toPreview: () => `<!--more-->`,
  });
  CMS.registerEditorComponent({
    id: 'youtube',
    label: 'YouTube',
    icon: 'youtube_activity',
    fields: [
      { name: 'id', label: 'ID' },
    ],
    pattern: /{{< youtube (?<id>[^ ]*?) >}}/m,
    toBlock: ({ id }) =>
      `{{< youtube ${id} >}}`,
    toPreview: ({ id }) =>
        `{{< youtube ${id} >}}`,
  });

  // ---------------------------------------------------------------------------
  // Initialize CMS (loads /admin/config.yml by default)
  // ---------------------------------------------------------------------------
  cms.init();
}
