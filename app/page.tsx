import {
  CarCard,
  Filter,
  FilterResetButton,
  Hero,
  SearchBar,
  ShowMoreButton,
} from '@/components';
import { fuels, yearsOfProduction } from '@/constants';
import { HomeProps } from '@/types';
import { fetchCars } from '@/utils';

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
  });

  const isDataEmpty =
    !Array.isArray(allCars) || allCars.length === 0 || !allCars;

  const hasQuery =
    searchParams.manufacturer ||
    searchParams.year ||
    searchParams.fuel ||
    searchParams.model;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <Filter title="fuel" options={fuels} />
            <Filter title="year" options={yearsOfProduction} />
          </div>
          {hasQuery && <FilterResetButton />}
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car, index) => (
                <CarCard key={`${car.model}-${index}`} car={car} />
              ))}
            </div>
            <ShowMoreButton
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">No car found</h2>
          </div>
        )}
      </div>
    </main>
  );
}
