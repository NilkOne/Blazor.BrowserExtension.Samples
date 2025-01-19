/**
 * Called before Blazor starts.
 * @param {object} options Blazor WebAssembly start options. Refer to https://github.com/dotnet/aspnetcore/blob/main/src/Components/Web.JS/src/Platform/WebAssemblyStartOptions.ts
 * @param {object} extensions Extensions added during publishing
 * @param {object} blazorBrowserExtension Blazor browser extension instance
 */
export function beforeStart(options, extensions, blazorBrowserExtension) {
  if (blazorBrowserExtension.BrowserExtension.Mode === blazorBrowserExtension.Modes.ContentScript) {


    // Extract Author name
    const table = document.querySelector('table.infobox.vevent');
    if (table) {
      const authorRow = Array.from(table.querySelectorAll('tr')).find(row =>
        row.querySelector('th')?.textContent.trim() === 'Original author(s)'
      );

      const author = authorRow?.querySelector('td a')?.textContent.trim();

      if (author) {
        console.log('Author:', author);
      } else {
        console.log('Author nor found');
      }
    } else {
      console.log('Table nor found');
    }

    // Original code
    const appDiv = document.createElement("div");
    appDiv.id = "SidebarUsingContentScriptsSampleApp";
    document.body.appendChild(appDiv);
  }
}