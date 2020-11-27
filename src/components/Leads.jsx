import React from "react";
import crm_data from "../data";

// console.log(crm_data);

// const Leads = () => (
class Leads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: crm_data.data,
      data: [],
    };
    this.getExternalLeads = this.getExternalLeads.bind(this);
    this.firstValidation = this.firstValidation.bind(this);
    this.secondValidation = this.secondValidation.bind(this);
  }
  // consulto datos externos
  async getExternalLeads() {
    // console.log("entro!");
    const res = await fetch(
      // "https://swapi.dev/api/planets/"
      "http://68.183.97.181/checkproyects/items/crm_test"
    );
    const data = await res.json();
    return data.data;
  }

  async firstValidation() {
    const externalData = await this.getExternalLeads();
    const internalData = crm_data.data;
    const finalResult = [];
    internalData.forEach((lead) => {
      const resultado = externalData.find((leadExt) => {
        return (
          leadExt.first_name === lead.first_name &&
          leadExt.last_name === lead.last_name &&
          leadExt.national_identification_number ===
            lead.national_identification_number &&
          leadExt.birthdate === lead.birthdate &&
          leadExt.email === lead.email
        );
      });
      if (resultado !== undefined) {
        finalResult.push(resultado);
      }
    });
    console.log(finalResult);
  }

  async secondValidation() {
    const externalData = await this.getExternalLeads();
    const resultado = externalData.filter((leadExt) => {
      return leadExt.judicial_records === false;
    });
    console.log(resultado);
  }

  async componentDidMount() {
    const data = await this.getExternalLeads();
    this.setState({ data });
    this.firstValidation();
    this.secondValidation();
  }

  render() {
    return (
      <section>
        <h2>Leads</h2>
        <div className="row">
          <div className="row__header">
            <div>First Name</div>
            <div>Last Name</div>
            <div>National Identification Number</div>
            <div>Birth Date</div>
            <div>Email</div>
          </div>
          {this.state.data.map((lead, index) => (
            <div className="row__item" key={index}>
              <div>{`${lead.first_name}`}</div>
              <div>{`${lead.last_name}`}</div>
              <div>{`${lead.national_identification_number}`}</div>
              <div>{`${lead.birthdate}`}</div>
              <div>{`${lead.email}`}</div>
            </div>
            // <Lead
            //   name={`${user.name.first} ${user.name.last}`}
            //   avatar={user.picture.thumbnail}
            //   email={user.email}
            //   key={user.id.value}
            // />
          ))}
        </div>
        <button>Check</button>
      </section>
    );
  }
}

export default Leads;
