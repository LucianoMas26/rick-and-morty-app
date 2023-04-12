import { useState, Fragment } from "react"
import { useDispatch } from "react-redux"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { Listbox, Transition } from "@headlessui/react"
import { filterByGender } from "../../redux/actions/actions"
export default function Gender() {
  const [selected, setSelected] = useState({ name: "Filtrar por:" })
  const dispatch = useDispatch()
  return (
    <div className="w-[15rem] mr-10">
      <Listbox value={selected}>
        <div className="relative ">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md  sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <KeyboardArrowDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              <Listbox.Option
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-lime-100 text-lime-900" : "text-gray-900"
                  }`
                }
                onClick={() => {
                  dispatch(filterByGender("Male"))
                  setSelected({ name: "Male" })
                }}
              >
                Male
              </Listbox.Option>
              <Listbox.Option
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-lime-100 text-lime-900" : "text-gray-900"
                  }`
                }
                onClick={() => {
                  dispatch(filterByGender("Female"))
                  setSelected({ name: "Female" })
                }}
              >
                Female
              </Listbox.Option>
              <Listbox.Option
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-lime-100 text-lime-900" : "text-gray-900"
                  }`
                }
                onClick={() => {
                  dispatch(filterByGender("Genderless"))
                  setSelected({ name: "Genderless" })
                }}
              >
                Genderless
              </Listbox.Option>
              <Listbox.Option
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-lime-100 text-lime-900" : "text-gray-900"
                  }`
                }
                onClick={() => {
                  dispatch(filterByGender("unknown"))
                  setSelected({ name: "unknown" })
                }}
              >
                Unknown
              </Listbox.Option>
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
