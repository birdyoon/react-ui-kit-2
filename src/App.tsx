import {
  Carousel,
  Tabs,
  Breadcrumb,
  Pagination,
  Progress,
  Calendar,
  Popover,
  Modal,
  DatePicker,
  Select,
  Accordion,
} from "./components";
import { useEffect, useState } from "react";
import { useToast } from "@ui/Toast/hooks/useToast";

const sleep = async (time: number): Promise<void> =>
  await new Promise((resolve) => setTimeout(() => resolve(), time));

function App() {
  const handleChangeTab = (index: number) => {
    console.log(index);
  };

  const [date, setDate] = useState(new Date());
  const handleChangeDate = (newDate: Date) => {
    setDate(newDate);
  };

  const [page, setPage] = useState(1);
  const handleChangePage = (page: number) => {
    setPage(page);
  };

  const [stop, setStop] = useState<boolean>(false);
  const getUserData = async () => {
    await sleep(3000);
    setStop(true);
  };
  useEffect(() => {
    getUserData();
  }, []);

  const [isOpen, setIsOpen] = useState<boolean>();
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleChangeDatePicker = (date: Date) => {
    console.log(date);
  };

  const [selectedValue, _] = useState<string>("1");
  const handleChangeValue = (selectedValue: string) => {
    console.log(selectedValue);
  };

  const toast = useToast();
  const handleClickOpenToast = () => {
    toast({
      title: "ToastTitle",
      description: "ToastDescription",
      delay: 2000,
      position: "top-right",
    });
  };

  return (
    <>
      <Progress stop={stop} />

      <Tabs onChangeTab={handleChangeTab} className="tab-tabs">
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
      </Carousel>

      <Calendar onChange={handleChangeDate} value={date}>
        <Calendar.Current />
        <Calendar.Navigator />
        <Calendar.Body />
      </Calendar>

      <Breadcrumb width="200px">
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
      </Pagination>

      <Popover popoverPosition="bottom-left">
        <Popover.Trigger>open</Popover.Trigger>
        <Popover.Content>Place content for the popover here.</Popover.Content>
      </Popover>

      <Modal
        onCloseModel={handleCloseModal}
        onOpenModal={handleOpenModal}
        open={isOpen}
      >
        <Modal.Backdrop />
        <Modal.Trigger>
          <div>Custom-Trigger</div>
        </Modal.Trigger>

        <Modal.Content>
          <Modal.Close>
            <a>custom-modal-close</a>
          </Modal.Close>
          <div>Modal Content</div>
        </Modal.Content>
      </Modal>

      <DatePicker date={new Date()} onChangeDate={handleChangeDatePicker} />

      <Select onChange={handleChangeValue} value={selectedValue}>
        <Select.Trigger />
        <Select.Content>
          <Select.Item value={"1"}>One</Select.Item>
          <Select.Item value={"2"}>Two</Select.Item>
          <Select.Item value={"3"}>Three</Select.Item>
        </Select.Content>
      </Select>

      <Accordion>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
          <Accordion.Content>
            Yes. It adheres to the WAI-ARIA design pattern.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>Is it styled?</Accordion.Trigger>
          <Accordion.Content>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-3">
          <Accordion.Trigger>Is it animated?</Accordion.Trigger>
          <Accordion.Content>
            Yes. It's animated by default, but you can disable it if you prefer.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>

      <button onClick={handleClickOpenToast}>open toast</button>
    </>
  );
}

export default App;
