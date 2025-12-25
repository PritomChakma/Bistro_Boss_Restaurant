import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import oderFoodImg from "../../assets/shop/banner2.jpg";
import UseMenu from "../../Hooks/UseMenu";
import Cover from "../../Shared/Cover/Cover";
import OrderTabs from "../../Shared/OrderTabs/OrderTabs";

const OderFood = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = UseMenu();
  console.log(category);
  const drinks = menu.filter((items) => items.category == "drinks");
  const dessert = menu.filter((items) => items.category == "dessert");
  const pizza = menu.filter((items) => items.category == "pizza");
  const salad = menu.filter((items) => items.category == "salad");  
  const soup = menu.filter((items) => items.category == "soup");
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
          <OrderTabs items={salad}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs items={pizza}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs items={soup}></OrderTabs>
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
