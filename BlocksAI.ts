enum datasetType {
    //% block="historical"
    historical,
    //% block="current"
    current
}

enum ML {
    //% block="supervised"
    supervised,
    //% block="unsupervised"
    unsupervised,
    //% block="semi-supervised"
    semiSupervised,
    //% block="reinforcment"
    reinforcment
}

enum actionML {
    //% block="classify"
    classify,
    //% block="get prediction"
    getPrediction
}

//% color="#4C97FF"
namespace datasets {

    //% block="%type| dataset"
    export function onEvent(type: datasetType, handler: () => void) {
        //if (type == historical){
        //    //blocks.place(GRASS, (1,0,0));
        //}else{
        //    //blocks.place(GRASS, (2,0,0));
        //}
    }

    //% block="gather data"
    export function data1() {
    /*Random Code*/
    }

    //% block="upload data"
    export function data2() {
    /*Random Code*/
    }

    //% block="label data"
    export function data3() {
    /*Random Code*/
    }

    //% block="historical dataset"
    export function dataset1(): number {
        return 0;
    }

    //% block="current dataset"
    export function dataset2(): number {
        return 0;
    }

    //% block="prepare data"
    export function prepare() {
        //blocks.place(GRASS, (1,1,1));
    /*Random Code*/
    }

}

//% color="#8332A8"
namespace AI {

    //% block="%type| machine learning"
    export function onEvent(type: ML, handler: () => void) {
    /*Random Code*/
    }

    //% block="%type| machine learning training"
    export function onEvent1(type: ML, handler: () => void) {
    /*Random Code*/
    }

    //% block="%type| machine learning algorithm with %datatype| dataset"
    export function onEvent2(type: ML, datatype: datasetType, handler: () => void) {
    /*Random Code*/
    }

    //% block="compare %dataset| against %dataset|"
    export function compare(dataset: datasetType, datasetType1: datasetType) {

    }

    //% block="find pattern and %MLaction|"
    export function action(MLaction: actionML) {
    /*Random Code*/
    }

    //% block="set goal to reach %Type|"
    export function goal() {
    /*Random Code*/
    }

    //% block="compare a %value| against a %value1|"
    export function compare1(value:number, value1:number) {
    /*Random Code*/
    }
    
    //% block="train AI"
    export function train() {
    /*Random Code*/
    }

}