import React, { useState } from 'react';

import { Button, Modal } from 'antd';

import PatientForm from './PatientForm';
import { usePatients } from '../../../hooks/usePatients';

import { IPatient } from '../../../interfaces/patient';

const ScanCode = () => {
    const { addPatient } = usePatients();
    const [visible, setVisible] = useState(false);

    const handleClick = () => setVisible(!visible);

    const closeModal = () => setVisible(false);

    const handleAddPatient = (patient: IPatient) => {
        addPatient(patient);
        closeModal();
    };



    return (
        <div className='add-patient'>
            <Button type='default' onClick={handleClick}>
                <span className='icofont icofont-plus mr-2' style={{ fontSize: '1.3em' }} />
                Add By Guest Code
            </Button>
            <Modal
                visible={visible}
                footer={null}
                onCancel={closeModal}
                destroyOnClose
                title={<h3 className='title'>Scan Code</h3>}
            >
                <PatientForm onCancel={closeModal} onSubmit={handleAddPatient} />
            </Modal>
        </div>
    );
};

export default ScanCode;
