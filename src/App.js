import { useEffect, useState } from 'react';
import './App.css';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const dumyDate = [
  //   {}, {}
  // ];
  // useEffect(() => {
  //   const list = dumyDate.map(org => (
  //     {
  //       ...org,
  //       name: org.navn,
  //       id: org.organisasjonsnummer
  //     }
  //   ))
  //   setOrgList(list)
  // }, [])
  const [selectedData, setSelectedData] = useState({});
  const handleOnSelect = (item) => {
    setSelectedData(item);
    console.log(item)
  }
  const formatResult = (item) => {
    console.log(item);
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.name} - {item.id.toLocaleString('nb-NO')}</span>
      </>
    )
  }
  const [orgList, setOrgList] = useState([]);
  const handleOnSearch = async (string, results) => {
    const response = await fetch(`https://data.brreg.no/enhetsregisteret/api/enheter?navn=${string}`);
    const data = await response.json();
    const newList = data._embedded?.enheter || [];
    console.log(newList);
    if (newList) {
      const list = newList.map(org => ({
        ...org,
        name: org.navn,
        id: org.organisasjonsnummer
      }));
      setOrgList(list);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <ReactSearchAutocomplete
                items={orgList}
                onSearch={handleOnSearch}
                onSelect={handleOnSelect}
                autoFocus formatResult={formatResult} />
            </div>
            <div className="col-6">
              {
                Object.keys(selectedData).length !== 0 ?
                  <div>
                    <div className="card">
                      <div className="card-body">
                        <h3>Nøkkelopplysninger fra Enhetsregisteret</h3>

                        <label htmlFor="navn-input">Navn:</label>
                        <input id="navn-input" type="text" value={selectedData.navn} /><br />
                        <label htmlFor="organisasjonsnummer-input">Organisasjonsnummer:</label>
                        <input id="organisasjonsnummer-input" type="text" value={selectedData.organisasjonsnummer.match(/.{1,3}/g).join(" ")} /><br />
                        <label htmlFor="adresse-input">Adresse:</label>
                        <input id="adresse-input" type="text" value={selectedData.forretningsadresse.adresse} /><br />
                        <label htmlFor="postnummer-input">Postnummer:</label>
                        <input id="postnummer-input" type="text" value={selectedData.forretningsadresse.postnummer} /><br />
                        <label htmlFor="poststed-input">Poststed:</label>
                        <input id="poststed-input" type="text" value={selectedData.forretningsadresse.poststed} /><br />
                        <label htmlFor="land-input">Land:</label>
                        <input id="land-input" type="text" value={selectedData.forretningsadresse.land} /><br />
                      </div>
                    </div>
                  </div> : null} </div>
          </div>
        </div>
      </header>
    </div>);
}

export default App;
