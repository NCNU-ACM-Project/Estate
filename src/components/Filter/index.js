import { default as FilterMain } from './Filter';
import FilterLocation from './FilterLocation';
import FilterSizeRange from './FilterSizeRange';
import FilterPriceRange from './FilterPriceRange';

let FilterTemp = FilterMain;
FilterTemp.Location = FilterLocation;
FilterTemp.SizeRange = FilterSizeRange;
FilterTemp.PriceRange = FilterPriceRange;

const Filter = FilterTemp;
export { Filter };
