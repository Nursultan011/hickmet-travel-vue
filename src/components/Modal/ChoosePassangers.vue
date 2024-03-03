<template>
    <div class="modal-passangers">
        <div class="main__modal-overlay" @click="handlePassangerModal(false)"></div>
        <div class="main__modal modal-passangers">
            <div class="main__modal-content">
                <div class="main__modal-line"></div>
                <div class="container">
                    <div class="modal-header-box">
                        <div class="back-box modal-passangers">
                            <img src="@/assets/images/left-arrow.svg" alt="left-arrow">
                            <p>Назад</p>
                        </div>
                        <div class="modal-header-text">
                            <h1>{{ getModalTitle }}</h1>
                        </div>
                        <div class="img-box" @click="handlePassangerModal(false)">
                            <p>Сбросить</p>
                        </div>
                    </div>
                
                    <div class="modal-passangers-content">
                        <div class="passangers-item">
                            <p>Взрослые</p>
                            <div class="item-handlers">
                                <img src="@/assets/images/minus-icon.svg" @click="changeAdultNumber('minus')" />
                                <span>{{ $store.state.adultsNum }}</span>
                                <img src="@/assets/images/Plus.svg" @click="changeAdultNumber('plus')"/>
                            </div>
                        </div>
                        <div class="passangers-item">
                            <p>Дети</p>
                            <div class="item-handlers">
                                <img src="@/assets/images/minus-icon.svg" @click="changeChildNumber('minus')"/>
                                <span>{{ $store.state.childNum }}</span>
                                <img src="@/assets/images/Plus.svg" @click="changeChildNumber('plus')"/>
                            </div>
                        </div>
                    </div>
                    <div class="modal__btn-box">
                        <button class="btn btn-1" @click="changeStepVal(3)">Выбрать</button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import { useStore } from 'vuex'
export default{
    name: 'ChoosePassangers',
    setup(){
        const store = useStore()
        const {getModalTitle} = store.getters

        const changeStepVal = (val) => {
            if(store.state.step > 2){
                store.commit('handlePassangerModal', false)
            }else{
                store.commit('changeStep', val)
                store.commit('handlePassangerModal', false)
            }
        }

        const changeAdultNumber = (type) => {
            store.commit('changeAdultNum', type)
        }

        const changeChildNumber = (type) =>{
            store.commit('changeChildNum', type)
        }
        const handlePassangerModal = (val) =>{
            store.commit('handlePassangerModal', val)
        }
        return{
            changeStepVal,
            getModalTitle,
            changeAdultNumber,
            changeChildNumber,
            handlePassangerModal
        }
    }
}
</script>