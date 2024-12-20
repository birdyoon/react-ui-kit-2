const prefixCls = "sy";

const getBaseCls = (suffix: string) => {
  return `${prefixCls}-${suffix}`;
};

/** Tabs Component **/
export const tabsBaseCls = getBaseCls("tabs");
export const tabsMenuListBaseCls = getBaseCls("tabs-menu-list");
export const tabsMenuBaseCls = getBaseCls("tabs-menu");
export const tabsPannelBaseCls = getBaseCls("tabs-pannel");

/** Carousel Component **/
export const carouselBaseCls = getBaseCls("carousel");
export const carouselItemListCls = getBaseCls("carousel-item-List");
export const carouselItemCls = getBaseCls("carousel-item");
export const carouselNavigatorCls = getBaseCls("carousel-navigation");
export const carouselIndicatorCls = getBaseCls("carousel-indicator");

// calendar Component
export const calendarBaseCls = getBaseCls("calendar");
export const calendarCurrentCls = getBaseCls("calendar-current");
export const calendarNavigatorCls = getBaseCls("calendar-navigator");
export const calendarBodyCls = getBaseCls("calendar-body");

// breadcrumb Component
export const breadcrumbBaseCls = getBaseCls("breadcrumb");
export const breadcrumbItemBaseCls = getBaseCls("breadcrumb-item");

// pagination Component
export const paginationBaseCls = getBaseCls("pagination");
export const paginationNavigatorCls = getBaseCls("pagination-navigator");
export const paginationPageButtons = getBaseCls("pagination-button");

// Popover Component
export const PopoverBaseCls = getBaseCls("popover");
export const PopoverContentCls = getBaseCls("popover-content");
export const PopoverTriggerCls = getBaseCls("popover-trigger");
