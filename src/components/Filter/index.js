import { default as FilterMain } from './Filter';
import FilterLocation from './FilterLocation';

let FilterTemp = FilterMain;
FilterTemp.Location = FilterLocation;

const Filter = FilterTemp;
export { Filter };
