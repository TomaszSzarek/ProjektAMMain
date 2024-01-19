import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Pulpit, ZnajdzOddzial, Historia, Profil } from "../views";
import { BottomTabIcon } from "../components/BottomTabIcon";
import ProduktyNav from "./ProduktyNav.js";
import PlatnosciNav from "./PlatnosciNav.js";

const optionScreen = {
  headerShown: false,
  tabBarShowLabel: false,
  unmountOnBlur: true
};

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: "lightgreen" },
        tabBarIcon: ({ focused }) => {
          return <BottomTabIcon routeName={route?.name} focused={focused} />;
        },
      })}
    >
      <Tab.Screen
        name="Pulpit"
        component={Pulpit}
        options={optionScreen}
      />
      <Tab.Screen
        name="Produkty"
        component={ProduktyNav}
        options={optionScreen}
      />
      <Tab.Screen
        name="ZnajdzOddzial"
        component={ZnajdzOddzial}
        options={optionScreen}
      />
      <Tab.Screen
        name="Platnosci"
        component={PlatnosciNav}
        options={optionScreen}
      />
      <Tab.Screen
        name="Historia"
        component={Historia}
        options={optionScreen}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={optionScreen}
      />
    </Tab.Navigator>
  );
}
