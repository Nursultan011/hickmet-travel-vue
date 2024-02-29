<template>
    <Modal>
        <Form :tour="true"/>
        <div class="no-data-box">
            <p>Пока ничего не найдено</p>
        </div>
    </Modal>
</template>

<script>
import Modal from '../Modal.vue';
import Form from '../Form.vue'
export default{
    name: 'ChooseTour',
    components:{
        Modal,
        Form
    }
}
</script>