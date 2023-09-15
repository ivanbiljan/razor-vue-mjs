using System.Text.Json;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace RazorPagesVueMjs;

public static class HtmlHelpers
{
    public static IHtmlContent MapImports(
        this IHtmlHelper htmlHelper,
        IDictionary<string, (string Development, string Production)> importMap)
    {
        var isDevelopment = IsDevelopment();
        var parsedMap = new Dictionary<string, string>();

        foreach (var (importAlias, (developmentImport, productionImport)) in importMap)
        {
            parsedMap[importAlias] = isDevelopment ? developmentImport : productionImport;
        }
        
        var importMapScript = $"""
                              <script type="importmap">
                                  ${JsonSerializer.Serialize(parsedMap)}
                              </script>
                              """;

        return htmlHelper.Raw(importMapScript);
    }

    private static bool IsDevelopment()
    {
        return string.Equals(
                   Environment.GetEnvironmentVariable("DOTNET_ENVIRONMENT"),
                   "Development",
                   StringComparison.OrdinalIgnoreCase) ||
               string.Equals(
                   Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT"),
                   "Development",
                   StringComparison.OrdinalIgnoreCase);
    }
}