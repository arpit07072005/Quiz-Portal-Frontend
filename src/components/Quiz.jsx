import React from 'react'
import styles from '../css/quiz.module.css'
import Navbar from './Navbar'
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
function Quiz() {
  return (
    <div className={styles.container}>
        <Navbar/>
      <div className={styles.inner_container}>
        <div className={styles.heading}>
            <h3 className={styles.left}>Quiz</h3>
            <h3 className={styles.right}>+ Add New Questions</h3>
        </div>
         <div className={styles.table}>
          <DataTable
            paginator
            rows={5}
            responsiveLayout="scroll"
          >
            <Column  header="Title"></Column>
            <Column
              header="Question"
            ></Column>
            <Column
              header="Options"
            ></Column>
            <Column
              header="Correct Answer"
            ></Column>
            <Column
              header="Category"
            ></Column>
          </DataTable>
        </div>
      </div>
    </div>
  )
}

export default Quiz
