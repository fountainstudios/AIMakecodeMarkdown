# Activity 3 – Sensor failure.

### @explicitHints true

```template
player.say("Lets fix those sensors!")
``` 

## Step 1
Two sensors have malfunctioned. Develop a machine learning algorithm to autonomously navigate the Agent over to the two different sensors, **sensor one** and **sensor three**, to repair them.

## Step 2 
Use a `||AI: machine learning||` coding block from the `||AI: AI||` tab on the left-hand side. Inside of this block place a `||AI: input||` coding block with a `||datasets: live dataset||`. After which, place a `||AI: analyze terrain data||` coding block. 

## Step 3
Place two more coding blocks from the `||Goals: goals||` tab on the left-hand side so that the Agent moves to the sensors that are broken. 

```ghost
datasets.liveDataset()
datasets.onEvent(datasetType.historical, function() {})

AI.analyze()
AI.onEvent3(function() {})
AI.compare2(0)

Goals.reach1()
Goals.reach2()
Goals.reach3()
Goals.reach4()
```

```package
aicustomblocks=github:fountainstudios/AICustomBlocks
```
