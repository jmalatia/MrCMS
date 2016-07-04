using System;
using MrCMS.Services.Widgets;
using MrCMS.Web.Apps.Faqs.Entities;
using MrCMS.Web.Apps.Faqs.Models;
using MrCMS.Web.Apps.Faqs.Widgets;
using NHibernate;

namespace MrCMS.Web.Apps.Faqs.Services.Widgets
{
    public class GetRandomFaqModel : GetWidgetModelBase<RandomFaq>
    {
        private readonly ISession _session;

        public GetRandomFaqModel(ISession session)
        {
            _session = session;
        }

        public override object GetModel(RandomFaq widget)
        {
            var allFaqs = _session.QueryOver<Faq>().Cacheable().List();
            var randomNumber = new Random();
            var faq = allFaqs[randomNumber.Next(0, allFaqs.Count)];

            return new RandomFaqModel {RandomFaq = widget, Faq = faq};
        }
    }

}