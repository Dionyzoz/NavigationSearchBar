using System;
using Sana.Extensions.ContentBlocks;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace NavigationSearchBar
{
    public class NavigationContentBlock : ContentBlockModel
    {
        [Localizable(false)]
        [Display(Name = "Navigation Search Depth")]
        public int SearchDepth { get; set; }
    }

    [ContentBlockId("NavigationSearchBar")]
    public class NavigationContentExtension : ContentBlockExtension<NavigationContentBlock>
    {

    }
}
