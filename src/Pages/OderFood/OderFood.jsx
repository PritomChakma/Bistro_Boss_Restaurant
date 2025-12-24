import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import oderFoodImg from "../../assets/shop/banner2.jpg";
import UseMenu from "../../Hooks/UseMenu";
import Cover from "../../Shared/Cover/Cover";
import OrderTabs from "../../Shared/OrderTabs/OrderTabs";

const OderFood = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = UseMenu();
  const drinks = menu.filter((items) => items.category == "drinks");
  const dessert = menu.filter((items) => items.category == "dessert");
  const Pizza = menu.filter((items) => items.category == "pizza");
  const Salad = menu.filter((items) => items.category == "salad");
  const Soup = menu.filter((items) => items.category == "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Oder Food</title>
      </Helmet>
      <Cover
        img={oderFoodImg}
        title="Our Shop"
        subTitle="Would You Try Linke Dish?"
      ></Cover>

      {/* tabs */}

      <Tabs
        className="my-16 md:w-10/12 mx-auto"
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTabs items={Salad}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs items={Pizza}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs items={Soup}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs items={dessert}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs items={drinks}></OrderTabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OderFood;
