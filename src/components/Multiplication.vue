<template>
    <div class="2xl:container 2xl:mx-auto mt-10">

        <div class="p-12">

            <div
                class="flex md:w-6/12 mx-auto justify-between mb-10 font-bold text-4xl"
                v-for="(exam, index) in examList"
                :key="index"
            >

                <div class="w-2/12">
                    <h2 class="">{{exam[0]}}</h2>
                </div>

                <div class="w-2/12">
                    <h2>X</h2>
                </div>

                <div class="w-2/12">
                    <h2 class="b">{{exam[1]}}</h2>
                </div>

                <div class="w-2/12">
                    <h2>=</h2>
                </div>

                <div class="w-2/12">
                    <input
                        type="text"
                        :class="`border ${checkClass[index]} w-full text-center box-border`"
                        data-index="index"
                        v-model="ans[index]"
                        @change="changeIndex(index)"
                    >
                </div>

                <div class="w-1/12">
                    <span v-if="checkClass[index].includes('right-answer')" class="mdi mdi-check text-lime-500"></span>
                </div>
            </div>

            <div
                class="md:w-6/12 mx-auto font-bold text-4xl mt-20 flex items-center justify-between">
                <button
                    class="group rounded-2xl h-12 w-48 bg-green-500 font-bold text-lg text-white relative overflow-hidden"
                    @click="restart"
                >
                    重新開始
                    <div
                        class="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl">
                    </div>
                </button>
                <h1>總分：{{score}}</h1>
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
                this.checkClass[idx] = 'right-answer';
            } else {
                this.checkClass[idx] = 'border-red-500 border-2 wrong-answer';
                console.log(rightAns);
            }
        },
        restart(){
            location.reload();
        }
    },
    computed: {
        score() {
            let total = 0;
            for (let i = 0; i < this.checkClass.length; i++) {
                if (this.checkClass[i].includes('right-answer')) {
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