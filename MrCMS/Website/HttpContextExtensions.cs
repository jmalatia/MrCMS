using System.Web;
using Ninject;

namespace MrCMS.Website
{
    public static class HttpContextExtensions
    {
        private const string CurrentKernelKey = "current.kernel";

        public static void SetKernel(this HttpContextBase context, IKernel kernel)
        {
            context.Items[CurrentKernelKey] = kernel;
        }

        public static T Get<T>(this HttpContextBase context)
        {
            var kernel = context.Items[CurrentKernelKey] as IKernel;
            return kernel != null ? kernel.Get<T>() : default(T);
        }
    }
}