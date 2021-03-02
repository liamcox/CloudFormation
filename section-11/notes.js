// Section 11 Nested Stacks
// Documents and resources:

// Example of Nested Stack: https://github.com/aws-samples/ecs-refarch-cloudformation/blob/master/master.yaml


// Introduction:

// nested stacks are stacks as part of other stacks
// They allow you to isolate repeated patterns/common components in separate stacks and call them from other stacks
// Example:
// Load balancer configuration that is reused
// Security group that is reused
// nested stacks are considered best practice
// To update a nested stack, always update the parent (route stack)
// Nested stacks can have nested stacks themselves


// Update and Delete Stacks:
// To update and Liam nest at stacks you need to do that through the root stack. AWS will automatically delete or update the nested stack once it's been implemented through the root stack

// Exporting stack I'll put values vs using nested stacks:

// If you have a central resource that is shared between many different other stacks, use Exported Stack Output Values
// If you need other stacks to be updated right away in a central resource is updated, use Exported Stack Output Values
// If the resources can be dedicated to one stack only and must be reusable pieces of code, use Nested Stacks
// Notes that you will need to update each root stacked manually in case of nested stack update

// Summary and Thoughts:
// Nested stacks allow you to put stacks within stacks and this could be very helpful for infrastructure as code. You can use github to save your previous infrastructure set ups and track your past infrastructure to your future infrastructure. I can see this being very helpful for managing your infrastructure because let's say you want to implement some new resources but they're not quite configured yet if you ever need to go back to the old infrastructure you have it saved as code to github.