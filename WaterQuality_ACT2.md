### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

```template
//
```

### @explicitHints true
### @flyoutOnly 0

# Activity 2 – Strait from the tap.

## Step 1
Now that you have collected water samples from the surrounding rivers, place each one into one of the **collection areas** for processing.
Then code a **historical** dataset with the water data from each of the locations.

## Step 2 
Start by using a `||Datasets: make dataset||` coding block, set to `||Datasets: historical||`. Inside of that place all of the `||Input: water data||`
from each of the locations, that was just processed. 

```ghost
Input.waterData1_WQ()
Input.waterData2_WQ()
Input.waterData3_WQ()
Datasets.setOfData_WQ(datasetType.historical, function() {})
```

```package
aicustomblocks=github:fountainstudios/AICustomBlocks
```