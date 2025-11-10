import {Admin, Resorce} from "react-admin";

export default function App() {
    return(
        <Admin dataProvider={dataProvider} authProvider={authProvider}>

            <Resource
        name="vehicles"
        list={VehicleList}
        create={VehicleCreate}
        edit={VehicleEdit}
        show={VehicleShow}
      />
        </Admin>
    );
}
