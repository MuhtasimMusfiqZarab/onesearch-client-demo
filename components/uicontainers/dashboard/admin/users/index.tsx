import React, { useState, useEffect } from 'react';
import Modal from 'components/general/modal';
import { ForbiddenAccess } from 'components/general';
import { Filter, CloseLite, Reset } from 'components/_icons';
import { Pagination, Table, Dropdown, Tab, SearchBox, Loader, Slider } from 'components/general';
import { UsersTableEnum } from 'components/utils/enum';
import styles from './styles.module.scss';
import { useCurrentUser } from 'components/_context/user/current-user';
import { useAllUsers } from 'components/_context/user/all-users';

import { adminNavElements } from 'components/utils/resolver/navigation/tab';

export default function Index() {
  const { currentUser, loading: loadingUser } = useCurrentUser();
  const {
    getAllUsers,
    loading: loadingAllUsers,
    total,
    setOffset,
    setSearchText,
    searchText,
    offset,
    setAccessRole,
    accessRole
  } = useAllUsers();
  let [modalIsOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.container__element_inner}>
        {currentUser?.accessRole === 'Admin' ? (
          <>
            <Tab items={adminNavElements} />
            <div className={styles.filterContainer}>
              <div className={styles.filterContainer_inner}>
                <div className={styles.search_wrap}>
                  <SearchBox
                    placeholder="Search Users"
                    searchText={searchText}
                    setSearchText={setSearchText}
                  />

                  <button onClick={() => setIsOpen(true)} className={styles.filtersToggle}>
                    <Filter />
                  </button>
                </div>
                <div className={styles.filterItems}>
                  <Dropdown
                    title="Access Role"
                    setItem={setAccessRole}
                    setOffset={setOffset}
                    items={['demo', 'admin', 'pro']}
                    isSearch={true}
                  />
                </div>
              </div>

              <div className={styles.container}>
                <div className={styles.container__table}>
                  {getAllUsers?.users?.length > 0 && (
                    <Table
                      items={getAllUsers?.users}
                      headersEnums={UsersTableEnum}
                      hasController={false}
                      hasCheckbox={false}
                      isLocked={false}
                    />
                  )}
                  {loadingAllUsers && (
                    <Table items={getAllUsers?.users} headersEnums={UsersTableEnum} loading />
                  )}
                  {getAllUsers?.users?.length === 0 && <div>No User Data Found</div>}
                </div>

                <div className={styles.container__pagination}>
                  <Pagination total={total} setOffset={setOffset} offset={offset} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <ForbiddenAccess />
        )}
      </div>

      {/* filter modal */}
      <Modal isOpen={modalIsOpen} setIsOpen={setIsOpen}>
        <div className={styles.edit_filters}>
          <h3>Edit Filters</h3>
          <div className={styles.search_wrap}>
            <SearchBox searchText={searchText} setSearchText={setSearchText} />
            <button className={`${styles.reset_form} ${styles.reset_form_modal}`}>
              <Reset />
            </button>
          </div>
          <div className={styles.filterItems}>
            <Dropdown
              title="Access Role"
              setItem={setAccessRole}
              setOffset={setOffset}
              items={['demo', 'admin', 'pro']}
              isSearch={true}
            />
          </div>

          <div className="text-center">
            <button type="submit" className="btn_fill_secondary">
              Apply Filter
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
