// Poetry and thoughts sample data
export const poetryPosts = [
  {
    id: 1,
    title: "Whispers of the Moon",
    excerpt: "A gentle poem about finding peace in the quiet moments of night, when the moon becomes our silent companion.",
    content: `In silver light she softly gleams,
The moon, weaver of midnight dreams.
Her gentle glow upon my face,
Brings comfort in this quiet space.

She listens to my whispered fears,
And kisses away the silent tears.
In her embrace, I find my rest,
My heart upon her silver breast.

Oh moon, sweet guardian of the night,
You fill my darkness with your light.
In your eternal, patient dance,
I find my peace, my second chance.

When morning comes, you fade away,
But in my heart, you always stay.
Until the sun has set once more,
And you return to my shore.`,
    type: "poem",
    tags: ["moon", "night", "peace", "solitude", "nature"],
    author: {
      name: "Luna Starwell",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    date: "October 1, 2025",
    readingTime: 2,
    likes: 47,
    comments: 12,
    image: "https://images.unsplash.com/photo-1509650717427-949a1ff24ec5?w=800&h=400&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "The Weight of Words Unspoken",
    excerpt: "Sometimes the things we don't say carry more weight than the words that escape our lips.",
    content: `I've been thinking lately about the conversations we never had. The words that lived in the space between us, hovering like morning mist, never quite touching the ground.

There's a peculiar heaviness to unspoken thoughts. They accumulate in the corners of our hearts, like dust in forgotten rooms. Each unsaid "I love you," each swallowed apology, each compliment that died on our tongue before it could bloom into sound.

We carry these silent words with us everywhere. They become the background music of our lives – a constant, quiet humming that only we can hear. Sometimes I wonder if others can sense them too, if they can see the weight we carry in the set of our shoulders, in the way we look away just a moment too soon.

But perhaps there's beauty in this silence too. Perhaps some feelings are too vast, too sacred to be contained in mere words. Perhaps the love that lives in the quiet spaces between heartbeats is the truest love of all.

Tonight, I'm learning to let these unspoken words have their own kind of voice. Not in sound, but in presence. Not in speech, but in the way I choose to show up in this world.`,
    type: "thought",
    tags: ["reflection", "communication", "love", "silence", "relationships"],
    author: {
      name: "Maya Chen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    date: "September 28, 2025",
    readingTime: 3,
    likes: 89,
    comments: 23,
    image: "https://images.unsplash.com/photo-1516627145497-ae4ad4e13cf7?w=800&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Coffee Shop Confessions",
    excerpt: "In the corner of a bustling coffee shop, two strangers find connection in the most unexpected way.",
    content: `The rain was drumming against the coffee shop windows when she walked in, shaking droplets from her umbrella like a bird preening its feathers. I was buried in my laptop, pretending to work on a novel that existed more in my imagination than on the screen.

She ordered a lavender latte – who orders lavender anything? – and sat at the table next to mine. For twenty minutes, we existed in parallel universes, separated by three feet and the invisible walls we build around ourselves in public spaces.

Then her phone rang. The conversation that followed was clearly meant to be private, but in the intimate acoustics of the small café, privacy was a luxury neither of us possessed.

"I can't keep pretending everything's okay," she said, her voice barely above a whisper. "I know you think I'm strong, but I'm not. I'm scared all the time."

I stopped typing. This wasn't eavesdropping anymore; this was witnessing.

When she hung up, she noticed me looking. Instead of embarrassment, she offered a sad smile.

"Sorry," she said. "Life's messy today."

"Life's always messy," I replied, closing my laptop. "Some days we just notice it more."

We talked for two hours. About fear, about the masks we wear, about the beautiful courage it takes to be vulnerable with strangers. When the rain stopped, we exchanged numbers and promises to meet again.

Sometimes connection finds us in the most ordinary moments, between sips of lavender lattes and the honest confessions that spill from tired hearts.`,
    type: "story",
    tags: ["connection", "strangers", "vulnerability", "coffee", "chance encounters"],
    author: {
      name: "River Davidson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    date: "September 25, 2025",
    readingTime: 4,
    likes: 156,
    comments: 34,
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=400&fit=crop"
  },
  {
    id: 4,
    title: "Dancing with Shadows",
    excerpt: "A metaphorical exploration of our relationship with our own darkness and how it shapes our light.",
    content: `I used to run from my shadows,
These dark companions of my soul.
They followed me through sunlit meadows,
Reminding me I'm not whole.

But shadows only exist where light appears,
They're proof that brightness lives within.
My darkness holds my deepest fears,
But also where my truths begin.

Now I dance with these grey partners,
We waltz through nights of doubt and pain.
They've taught me to be my own architect
Of joy that follows rain.

For every shadow has its story,
Every darkness has its gift.
In learning to embrace the night,
I've found the morning's gentle lift.

So here's to all our hidden parts,
The pieces we try to deny.
They're not our enemies or faults—
They're wings that help our spirits fly.`,
    type: "poem",
    tags: ["self-acceptance", "darkness", "growth", "inner work", "metaphor"],
    author: {
      name: "Sage Moonwright",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    date: "September 22, 2025",
    readingTime: 2,
    likes: 73,
    comments: 18,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop"
  },
  {
    id: 5,
    title: "The Art of Letting Go",
    excerpt: "Reflections on release, renewal, and the cyclical nature of holding on and letting go.",
    content: `There's an art to letting go that no one teaches you in school. It's not mentioned in the curriculum of life, yet it's perhaps the most essential skill we need to master.

I learned this lesson from autumn trees. They don't clutch their leaves in desperation as the seasons change. They don't mourn the green that's turning gold, then brown, then gone. They simply release what no longer serves them, trusting in the wisdom of cycles, in the promise of spring's return.

But we humans, we're different. We hold onto everything – old hurts, expired dreams, relationships that have run their course, versions of ourselves we've outgrown. We carry them like heavy backpacks, wondering why our shoulders ache, why our steps have grown so slow.

Learning to let go isn't about giving up or admitting defeat. It's about making space. Space for new growth, new love, new possibilities we can't even imagine yet. It's about trusting that our hands are meant to be open, not clenched.

I think about the butterfly that must let go of being a caterpillar, the river that must let go of being a raindrop, the seed that must let go of being whole to become a tree. Nature is constantly teaching us this lesson: sometimes we must release who we were to become who we're meant to be.

Today, I practice the art of letting go. Not as loss, but as liberation. Not as ending, but as beginning. Not as emptiness, but as infinite possibility.`,
    type: "thought",
    tags: ["letting go", "growth", "nature", "transformation", "mindfulness"],
    author: {
      name: "Autumn Rivers",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    date: "September 20, 2025",
    readingTime: 3,
    likes: 203,
    comments: 45,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop"
  },
  {
    id: 6,
    title: "Midnight Musings",
    excerpt: "Late night thoughts about time, dreams, and the magic that happens when the world sleeps.",
    content: `Three AM thoughts taste different
Than their daytime cousins.
They're raw, unfiltered,
Seasoned with starlight
And the honest exhaustion
Of hearts that have carried
The weight of the day.

In this liminal space
Between yesterday's endings
And tomorrow's beginnings,
Truth whispers its secrets
To those brave enough
To listen in the dark.

Here, in the cathedral of night,
Where silence is the sermon
And shadows are the congregation,
I find the pieces of myself
I lost in daylight's demands.

The clock ticks its gentle reminder:
This too shall pass,
This darkness, this doubt,
This beautiful ache
Of being human
In an infinite universe.

And somewhere between
The last star's farewell
And the first bird's greeting,
I remember who I am
Beneath all the becoming.`,
    type: "poem",
    tags: ["night", "introspection", "time", "solitude", "self-discovery"],
    author: {
      name: "Nova Midnight",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    date: "September 18, 2025",
    readingTime: 2,
    likes: 91,
    comments: 27,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop"
  }
];