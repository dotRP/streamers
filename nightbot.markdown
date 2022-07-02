---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Nightbot
---

#### Commands

1. Add the following to your Nightbot [Custom Commands](https://nightbot.tv/commands/custom)
2. Click to copy each line
3. Replace `[pronouns]` with your appropriate usage

<div markdown="1" class="content-table">

| Command Name     | Response                                                                                                                             | Access Level    |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------ | --------------- | ------ | -------- |
| `!cast`          | `Want to learn more about the cast of dotRP? Check it out here: https://cast.dotroleplay.com/`                                       | Everyone        |
| `!crash`         | `$(channel) has crashed $(count) times...[pronouns] needs some driving lessons monkaSTEER`                                           | Mods            |
| `!devcru`        | `Want to learn more about the devCRU? Check it out here: https://cast.dotroleplay.com/devcru`                                        | Everyone        |
| `!dotrp`         | `$(urlfetch https://apiv3.m2s.bz/api/dotrp?code=Uw4wM-J0j7lPvLtOZf2h9gvjppdoZIaSLaVJHUou0onJAzFuU_6ZGA==&name=$(2)&type=$(1))`       | Everyone        |
| `!down`          | `$(channel) has been downed $(count down) times...someone get this [pronoun] some body armor!`                                       | Mods            |
| `!resetcrash`    | `edit !crash -c=0`                                                                                                                   | Mods            |
| `!resetdown`     | `edit !down -c=0`                                                                                                                    | Mods            |
| `!resetseatbelt` | `edit !seatbelt -c=0`                                                                                                                | Mods            |
| `!seatbelt`      | `Aayy buckle up! Seatbelts save lives! $(channel) has been ejected $(count) times!`                                                  | Everyone        |
| `!supportdotrp`  | `$(urlfetch https://apiv3.m2s.bz/api/dotrp?code=Uw4wM-J0j7lPvLtOZf2h9gvjppdoZIaSLaVJHUou0onJAzFuU_6ZGA==&name=support&type=timers)`  | Everyone        |

</div>



#### Timers

1. Add the following to your Nightbot [Timers](https://nightbot.tv/timers)
2. Click to copy each line

<div markdown="1" class="content-table">

| Timer Name    | Response                                                                                                                             | Time Interval (Recommended)  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- |
| dotRP Twitter |`$(urlfetch https://apiv3.m2s.bz/api/dotrp?code=Uw4wM-J0j7lPvLtOZf2h9gvjppdoZIaSLaVJHUou0onJAzFuU_6ZGA==&name=twitter&type=timers)` | 15-20 minutes                |
| dotRP Discord | `$(urlfetch https://apiv3.m2s.bz/api/dotrp?code=OdpiZ6UmcAqxpyJeKjeU4X16sC45x222jS2ZcXR08ZVyAzFus3Yi5w==&name=discord&type=timers)` | 30 minutes                   |
| LSLore        | `$(urlfetch https://apiv3.m2s.bz/api/dotrp?code=OdpiZ6UmcAqxpyJeKjeU4X16sC45x222jS2ZcXR08ZVyAzFus3Yi5w==&name=lslore&type=timers)`  | 60 minutes                   |
| Kraken        | `THE KRAKEN CONSUMES ALL`                                                                                                            | 30 minutes                   |

</div>
