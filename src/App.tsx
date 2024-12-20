import "./App.css";
// import Calendar from "./components/Calendar";
import { Carousel, Tabs, Breadcrumb, Pagination } from "./components";
import { useState } from "react";
import Popover from "./components/Popover";
function App() {
  const handleChangeTab = (index: number) => {
    console.log(index);
  };
  // const handleChangeDate = () => {};

  const [page, setPage] = useState(1);
  const handleChangePage = (page: number) => {
    setPage(page);
  };

  return (
    <>
      {/* <Tabs onChangeTab={handleChangeTab} className="tab-tabs">
        <Tabs.MenuList>
          <Tabs.Menu index={1}>Menu1</Tabs.Menu>
          <Tabs.Menu index={2}>Menu2</Tabs.Menu>
          <Tabs.Menu index={3}>Menu3</Tabs.Menu>
        </Tabs.MenuList>
        <Tabs.Pannel index={1}>Content1</Tabs.Pannel>
        <Tabs.Pannel index={2}>Content2</Tabs.Pannel>
        <Tabs.Pannel index={3}>Content3</Tabs.Pannel>
      </Tabs>

      <Carousel className="carousel-tabs" itemLength={3}>
        <Carousel.ItemList>
          <Carousel.Item index={0}>1</Carousel.Item>
          <Carousel.Item index={1}>2</Carousel.Item>
          <Carousel.Item index={2}>3</Carousel.Item>
        </Carousel.ItemList>
        <Carousel.Navigator />
        <Carousel.Indicator />
      </Carousel> */}

      {/* <Calendar onChange={handleChangeDate}>
        <Calendar.Current />
        <Calendar.Navigator />
        <Calendar.Body />
      </Calendar> */}

      {/* <Breadcrumb width="200px">
        <Breadcrumb.Item href="/a">A</Breadcrumb.Item>
        <Breadcrumb.Item href="/a-a">A-A</Breadcrumb.Item>
        <Breadcrumb.Item href="/a-a-a">A-A-A</Breadcrumb.Item>
        <Breadcrumb.Item href="/a-a-a-a">A-A-A-A</Breadcrumb.Item>
        <Breadcrumb.Item href="/a-a-a-a-a">A-A-A-A-A</Breadcrumb.Item>
      </Breadcrumb>

      <Pagination
        itemLength={235}
        onPageChange={handleChangePage}
        value={page}
        visiblePageCount={10}
        itemsPerPage={20}
      >
        <Pagination.PageButtons />
        <Pagination.Navigator />
      </Pagination> */}

      <Popover position="">
        <Popover.Trigger>open</Popover.Trigger>
        <Popover.Content>Place content for the popover here.</Popover.Content>
      </Popover>
    </>
  );
}

export default App;
