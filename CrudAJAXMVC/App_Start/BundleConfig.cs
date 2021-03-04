using System.Web;
using System.Web.Optimization;

namespace CrudAJAXMVC
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js",
                        "~/Scripts/umd/popper.min.js",
                        "~/Scripts/Employee.js",
                        "~/Scripts/jquery-ui-1.12.1.min.js",
                        "~/Scripts/jquery.validate*",
                        "~/Scripts/DataTables/jquery.dataTables.min.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.min.js"));

            bundles.Add(new StyleBundle("~/bundles/css").Include(
                      "~/Content/DataTables/css/jquery.dataTables.min.css",
                      "~/Content/themes/base/jquery-ui.min.css",
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
        }
    }
}
