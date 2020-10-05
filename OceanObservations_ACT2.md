# Activity 2 – Underwater data.

### @explicitHints true

```template
player.say("")
```

## Step 1
Now that the sensors have been placed we need to make **one** live dataset that is going to hold all of the data from the different sensors.
Once that is done we should be able to see what is going on beneath the surface on the four monitors. 

## Step 2 
First use a `||Datasets: dataset||` coding block, from the `||Datasets: DATASETS||` tab on the left side.
Set that block to be a `||Datasets: live||` dataset.

## Step 3
Place the different sensor `||Input: inputs||`, from the `||Input: INPUT||` tab on the left-hand side, inside of the dataset.

```ghost
Input.sensor1()
Input.sensor2()
Input.sensor3()
Input.sensor4()
Datasets.setOfData_OO(datasetType.historical, function() {})
```

```package
aicustomblocks=github:fountainstudios/AICustomBlocks
```
