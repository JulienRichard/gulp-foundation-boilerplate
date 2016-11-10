// FOUNDATIONS CONFIG
// -----------------------------------
// DropDown Menus
Foundation.DropdownMenu.defaults.hoverDelay = 50;
Foundation.DropdownMenu.defaults.closingTime = 100;
Foundation.DropdownMenu.defaults.autoclose = true;

// DrillDown Menu
Foundation.Drilldown.defaults.backButton = '<li class="js-drilldown-back"><a><i class="fa fa-angle-left"></i><span>Retour</span></a></li>';
Foundation.Drilldown.defaults.parentLink = false;
Foundation.Drilldown.defaults.closeOnClick = false;

// Accordion Menu
Foundation.Accordion.defaults.slideSpeed = 250;
Foundation.Accordion.defaults.multiOpen = true;

// Accordion
Foundation.Accordion.defaults.slideSpeed = 250;
Foundation.Accordion.defaults.multiExpand = true;
Foundation.Accordion.defaults.allowAllClosed = true;

// Tabs
Foundation.Tabs.defaults.linkClass = 'tabs-title';
Foundation.Tabs.defaults.panelClass = 'tabs-panel';
Foundation.Tabs.defaults.autoFocus = true;
Foundation.Tabs.defaults.wrapOnKeys = true;
Foundation.Tabs.defaults.matchHeight = true;

// Reveal (Modal box)
Foundation.Reveal.defaults.animationIn  = 'FadeIn';
Foundation.Reveal.defaults.animationOut  = 'FadeOut';
Foundation.Reveal.defaults.closeOnClick  = true;
Foundation.Reveal.defaults.closeOnEsc  = true;
Foundation.Reveal.defaults.multipleOpened  = false;
Foundation.Reveal.defaults.fullScreen  = false;


// INIT
jQuery(document).foundation();
