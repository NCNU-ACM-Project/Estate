import { default as FilterMain } from './Filter';
import FilterLocation from './FilterLocation';
import FilterSizeRange from './FilterSizeRange';
import FilterPriceRange from './FilterPriceRange';
import FilterSortingMethod from './FilterSortingMethod';

let FilterTemp = FilterMain;
FilterTemp.Location = FilterLocation;
FilterTemp.SizeRange = FilterSizeRange;
FilterTemp.PriceRange = FilterPriceRange;
FilterTemp.SortingMethod = FilterSortingMethod;

const Filter = FilterTemp;
export { Filter };
