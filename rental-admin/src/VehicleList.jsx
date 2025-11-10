import {List, Datagrid, TextField, NumberField, ReferenceField} from "react-admin";

const VehicleList = () => (
    <List>
        <Datagrid rowClick="show">
            <TextField source= "registration_number" />
            <TextField source="make" />
      <TextField source="model" />
      <NumberField source="year" />
       <ReferenceField source="category_id" reference="vehicle_categories">
        
      </ReferenceField>
    </Datagrid>
  </List>
);