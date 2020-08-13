## Introduction step @unplugged

# Alert the Team.

## Step 1

Drag the ``||hourOfCode:alert team||`` block inside the ``||hourOfCode:if hazard found||`` block, so that the team can be alerted.



```ghost
hourOfCode.alertTeam()
```

```template
while (hourOfCode.agentLookForHazards()) {
    if (hourOfCode.agentSeeHazard()) {
        
    }
}
```

```package
minecraft-hoc2019=github:microsoft/pxt-minecraft-hoc2019
```