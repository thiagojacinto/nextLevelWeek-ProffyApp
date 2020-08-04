import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import InstructorManagement from "../pages/InstructorManagement";
import SelectInstructor from "../pages/SelectInstructor";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact>
        <Landing />
      </Route>

      <Route path="/select">
        <SelectInstructor />
      </Route>

      <Route path="/booking">
        <InstructorManagement />
      </Route>
    </BrowserRouter>
  );
}
