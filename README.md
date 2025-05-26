# irupp-github.com
Ian Rupp
irupp@my.waketech.edu
This is my school account 
This will hold assingments and project
# About Me
## My Intrestes
I enjoy producing Dubstep and Riddim my stage name is EERIE for anyone intersted, playing soccer any chance I can get as I have been playing for 23 years, and also video games in my free time with my buddies who got me on the journey of building Pc's we mainly play CS2.I am also expecting my first daughter sep 20th 2025 and I am very excited to become a father
## Websites I recommend 
[Avant](https://avantsamples.com/courses/samplifire-producers-guide/) I find this useful for anyone wanting to learn how to produce EDM
[HackMe](https://tryhackme.com/paths) I find this useful for anyone wanting to practice and learn more about cyber security and IT
## DDos_Attack_sequence.md
```mermaid
sequenceDiagram
    participant Attacker
    participant Botnet
    participant Internet
    participant GameServer as Counter-Strike 2 Server
    participant Players

    Attacker->>Botnet: Command to initiate DDoS
    Botnet->>Internet: Generate massive traffic
    loop Flood with spoofed packets
        Internet->>GameServer: Malicious traffic (UDP/TCP flood, etc.)
    end
    GameServer-->>Players: High latency / disconnections
    Players->>GameServer: Attempt to reconnect
    GameServer-->>Attacker: Overloaded / may crash
Attacker controls a Botnet (network of compromised devices).
The Botnet sends a huge volume of malicious traffic to the Counter-Strike 2 Server via the Internet.
The server becomes overloaded and starts dropping connections, impacting legitimate Players.
Players might experience high ping, lag, or be disconnected entirely.
