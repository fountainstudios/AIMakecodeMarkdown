# Activity 3 – Future proofing.

### @explicitHints true

```template
player.say("")
``` 

## Step 1
Now that we have a steady data stream coming in, the research about the impact of climate change on these reefs will go a lot quicker. However, in 
the event that a sensor fails we don't want to dive into the water each time. That is why, with the use of AI, we can make the Agent get to the sensors and 
and repair them. This is possible using **autonomous navigation** and the data that we are already collecting.

## Step 2 
Use a `||AI: machine learning||` coding block from the `||AI: AI||` tab on the left-hand side. 
Inside of this block, place a `||AI: input||` coding block. Then, inside of that place a `||datasets: live dataset||` coding block.
After which, place a `||AI: analyze terrain data||` coding block. 

## Step 3
Then place a `||AI: generate routes||` coding block. Now, when run, the AI will have generated routes for the Agent to take and not get stuck in different corals. 
We will also be able to see the terrain on the Map. 

```ghost
Datasets.liveData()
Datasets.setOfData_OO(datasetType.historical, function() {})

AI.analyze_OO()
AI.ml_OO(function() {})
AI.input_OO()
AI.genRoutes_OO()
```

```package
aicustomblocks=github:fountainstudios/AICustomBlocks
```
