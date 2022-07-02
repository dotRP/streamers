---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
# Commands correct as of 02 JUL 22
#UPDATED API KEY 02 JUL 22

layout: default
title: StreamElements
---

#### Commands

1. Add the following to your StreamElements [Custom Commands](https://streamelements.com/dashboard/bot/commands/custom)
2. Click to copy each line
3. Replace `[pronouns]` with your appropriate usage

<div markdown="1" class="content-table">

| Command Name     | Response                                                                                                                             | Access Level    |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------ | --------------- | ------ | -------- |
| `!cast`          | `Want to learn more about the cast of dotRP? Check it out here: https://cast.dotroleplay.com/`                                       | Everyone        |
| `!crash`         | `${channel.display_name} has crashed ${count crash} times...[pronouns] needs some driving lessons monkaSTEER`                        | Mods            |
| `!devcru`        | `Want to learn more about the devCRU? Check it out here: https://cast.dotroleplay.com/devcru`                                        | Everyone        |
| `!dotrp`         | `${customapi https://apiv3.m2s.bz/api/dotrp?code=Uw4wM-J0j7lPvLtOZf2h9gvjppdoZIaSLaVJHUou0onJAzFuU_6ZGA==&type=${1:1 | ' '}&name=${2:2 | ' '}}` | Everyone |
| `!down`          | `${channel.display_name} has been downed ${count down} times...someone get this [pronoun] some body armor!`                          | Mods            |
| `!resetcrash`    | `${touser} is resetting the crash counter! ${count crash 0}`                                                                         | Mods            |
| `!resetdown`     | `${touser} is resetting the down counter! ${count down 0}`                                                                           | Mods            |
| `!resetseatbelt` | `${touser} is resetting the seatbelt counter! ${count seatbelt 0}`                                                                   | Mods            |
| `!seatbelt`      | `Aayy buckle up! Seatbelts save lives! ${channel.display_name} has been ejected ${count seatbelt} times!`                            | Everyone        |
| `!supportdotrp`  | `${customapi https://apiv3.m2s.bz/api/dotrp?code=Uw4wM-J0j7lPvLtOZf2h9gvjppdoZIaSLaVJHUou0onJAzFuU_6ZGA==&name=support&type=timers}` | Everyone        |

</div>

#### Timers

1. Add the following to your StreamElements [Timers](https://streamelements.com/dashboard/bot/timers)
2. Click to copy each command

<div markdown="1" class="content-table">

| Timer Name    | Response                                                                                                                             | Time Interval (Recommended)  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- |
| dotRP Twitter | `${customapi https://apiv3.m2s.bz/api/dotrp?code=Uw4wM-J0j7lPvLtOZf2h9gvjppdoZIaSLaVJHUou0onJAzFuU_6ZGA==&name=twitter&type=timers}` | 15-20 minutes                |
| dotRP Discord | `${customapi https://apiv3.m2s.bz/api/dotrp?code=Uw4wM-J0j7lPvLtOZf2h9gvjppdoZIaSLaVJHUou0onJAzFuU_6ZGA==&name=discord&type=timers}` | 30 minutes                   |
| LSLore        | `${customapi https://apiv3.m2s.bz/api/dotrp?code=Uw4wM-J0j7lPvLtOZf2h9gvjppdoZIaSLaVJHUou0onJAzFuU_6ZGA==&name=lslore&type=timers}`  | 60 minutes                   |
| Kraken        | `THE KRAKEN CONSUMES ALL`                                                                                                            | 30 minutes                   |

</div>
