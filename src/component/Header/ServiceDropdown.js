import { useState } from "react";
import { NavLink } from "react-router-dom";

const ServicesDropdownMenu = ({ CategoryDetails = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuIndex, setSubmenuIndex] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => {
    setIsOpen(false);
    setSubmenuIndex(null);
  };

  return (
    <div className="dropdown" onMouseLeave={closeDropdown}>
      <button
        className="btn h-nav-services btn-primary dropdown-toggle"
        onMouseEnter={toggleDropdown}
        aria-expanded={isOpen}
      >
        <NavLink to="/services">
          <i className="fa fa-handshake" /> Services
          <b className="caret"></b>
        </NavLink>
      </button>

      {isOpen && (
        <ul
          className="dropdown-menu ifjsff__dpdn show bg-white ps-0"
          aria-labelledby="dropdownMenuButton"
        >
          {CategoryDetails && CategoryDetails.length > 0 ? (
            CategoryDetails.map((category, index) => (
            <li
              key={category.id}
              onMouseEnter={() => setSubmenuIndex(index)}
              onMouseLeave={() => setSubmenuIndex(null)}
            >
              <div className="d-flex ishdifhiddd align-items-center">
                <NavLink
                  className="dropdown-item"
                  to={`/${category.category_slug}`}
                >
                  {category.category_name}
                </NavLink>
                {category.subcategories.length > 0 && (
                  <div className="sdihfisdfttt">&raquo;</div>
                )}
              </div>

              {submenuIndex === index && category.subcategories.length > 0 && (
                <div className="dropdown-menu dropdown-submenu d-m-cstm bg-white ps-0">
                  <div className="row m-0">
                    {(() => {
                      const subcategories = category.subcategories || [];
                      const half = Math.ceil(subcategories.length / 2);
                      const firstHalf = subcategories.slice(0, half);
                      const secondHalf = subcategories.slice(half);

                      return (
                        <>
                          <div className="col-6 p-0">
                            <ul className="list-unstyled mb-0">
                              {firstHalf.map((sub) => (
                                <li key={sub.id}>
                                  <NavLink
                                    className="dropdown-item"
                                    to={`/${sub.sub_category_slug}`}
                                  >
                                    {sub.sub_category_name}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="col-6 p-0">
                            <ul className="list-unstyled mb-0">
                              {secondHalf.map((sub) => (
                                <li key={sub.id}>
                                  <NavLink
                                    className="dropdown-item"
                                    to={`/${sub.sub_category_slug}`}
                                  >
                                    {sub.sub_category_name}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </>
                      );
                    })()}
                  </div>
                </div>
              )}
            </li>
          ))
          ) : (

            <div className="d-flex ishdifhiddd align-items-center">
              <NavLink className="dropdown-item">
                No categories available
              </NavLink>
            </div>
          )}
        </ul>
      )}
    </div>
  );
};


export default ServicesDropdownMenu;
