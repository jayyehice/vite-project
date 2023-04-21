<template>
    <div class="row justify-content-center">

        <div class="col-11">

            <div
                class="row rowm"
                v-for="(exam, index) in examList"
                :key="index"
            >

                <div class="col-2">
                    <h2 class="b">{{exam[0]}}</h2>
                </div>

                <div class="col">
                    <h2>X</h2>
                </div>

                <div class="col-2">
                    <h2 class="b">{{exam[1]}}</h2>
                </div>

                <div class="col">
                    <h2>=</h2>
                </div>

                <div class="col-3">
                    <input
                        type="text"
                        :class="checkClass[index]"
                        data-index="index"
                        v-model="ans[index]"
                        @change="changeIndex(index)"
                    >
                </div>

                <i
                    class="fa-sharp fa-solid fa-xmark col"
                    :class="checkClass[index]"
                ></i>
            </div>

            <div class="row">
                <h1 v-if="score > 0">分數：{{score}}</h1>
            </div>

        </div>

    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            level: 7,
            checkClass: ['', '', '', '', ''],
            examList: [
                [1, 2],
                [3, 4],
                [5, 6],
                [7, 8],
                [9, 9],
            ],
            ans: [null, null, null, null, null],
        };
    },

    methods: {
        changeIndex(idx: number) {
            const rightAns: number =
                this.examList[idx][0] * this.examList[idx][1];

            if (rightAns == this.ans[idx]) {
                this.checkClass[idx] = 'right';
            } else {
                this.checkClass[idx] = 'err';
                console.log(rightAns);
            }
        },
    },
    computed: {
        score() {
            let total = 0;
            for (let i = 0; i < this.checkClass.length; i++) {
                if (this.checkClass[i] == 'right') {
                    total += 100 / this.checkClass.length;
                }
            }
            return total;
        },
    },
    mounted() {
        const firstNum = Math.floor(Math.random() * this.level) + 2;

        let arr = [2, 3, 4, 5, 6, 7, 8, 9];
        arr.sort(function () {
            return 0.5 - Math.random();
        });

        for (let i = 0; i < this.examList.length; i++) {
            this.examList[i][0] = firstNum;
            this.examList[i][1] = arr[i];
        }
    },
};
</script>

<style scoped>
</style>