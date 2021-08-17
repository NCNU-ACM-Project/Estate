import { default as FilterMain } from './Filter';
import FilterLocation from './FilterLocation';
import FilterSizeRange from './FilterSizeRange';

let FilterTemp = FilterMain;
FilterTemp.Location = FilterLocation;
FilterTemp.SizeRange = FilterSizeRange;

const Filter = FilterTemp;
export { Filter };
