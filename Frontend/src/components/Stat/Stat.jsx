import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";

const Stat = () => {
  return (
    <section class="bg-[#1CD2B1]">
      <div class="mx-auto max-w-screen-xl px-4 py-5 sm:px-6 md:py-5 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="text-3xl font-bold text-white sm:text-4xl">
            Why you Should Choose WorkUp ?
          </h2>
        </div>

        <div class="mt-8 sm:mt-12">
          <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100">
            <div class="flex flex-col px-4 py-8 text-center">
              <FontAwesomeIcon
                icon={faBuilding}
                size="3x"
                color="white"
                className="pb-4"
              />

              <dt class="order-last text-lg font-medium text-white pt-5 text-center">
                Companies
              </dt>

              <dd class="text-4xl font-extrabold text-white md:text-5xl">
                +10000
              </dd>
            </div>

            <div class="flex flex-col px-4 py-8 text-center">
              <FontAwesomeIcon
                icon={faHandshake}
                size="3x"
                color="white"
                className="pb-4"
              />
              <dt class="order-last text-lg font-medium text-white pt-5 text-center">
                Hiring/years
              </dt>

              <dd class="text-4xl font-extrabold text-white md:text-5xl">
                +20000
              </dd>
            </div>

            <div class="flex flex-col px-4 py-8 text-center">
              <FontAwesomeIcon
                icon={faUser}
                size="3x"
                color="white"
                className="pb-4"
              />
              <dt class="order-last text-lg font-medium text-white pt-5 text-center">
                Candidates
              </dt>

              <dd class="text-4xl font-extrabold text-white md:text-5xl">
                +200000
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Stat;
