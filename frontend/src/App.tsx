import type { Component } from 'solid-js';

import styles from './App.module.css';
import CivTextInput from './components/ui/CivTextInput';
import CivSelect from './components/ui/CivSelect';
import { Civilisation, Ethnicity } from './type';

const App: Component = () => {
  let civilisation: Civilisation = {
    name: '',
    description: '',
    adjective: '',
    ethnicity: Ethnicity.ETHNICITY_AFRICAN,
    maleCitizens: [],
    femaleCitizens: [],

    geography: {
      mountains: [],
      volcanoes: [],
      rivers: [],
      deserts: [],
      lakes: [],
      seas: [],
    },

    startingBiasTerrain: [],
    startingBiasFeature: [],
    startingBiasResource: [],
    startingBiasRiver: [],
  };

  const handleChange = <K extends keyof Civilisation>(key: K) => (value: Civilisation[K]) => {
    civilisation[key] = value;
    console.log(civilisation);
  };

  return (
    <div class={styles.App}>
      <CivTextInput value={civilisation.name} placeholder='Civilisation Name' onChange={handleChange("name")} maxLength={20} required/>
      <CivSelect enumType={Ethnicity} value={civilisation.ethnicity} onChange={handleChange("ethnicity")}/>
    </div>
  );
};

export default App;
