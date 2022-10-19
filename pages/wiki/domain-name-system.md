---
title: "Domain Name System (DNS)"
draft: false
---

The domain name system (**DNS**) is the way that internet domain names are located and translated into internet protocol (IP) addresses. The domain name system maps the name people use to locate a website to the IP address that a computer uses to locate a website. For example, if someone types *www.google.com* into a web browser, a server behind the scenes will map that name to the IP address *216.58.213.196*.

#### A - Address record
Returns a 32-bit IPv4 address, most commonly used to map hostnames to an IP address of the host, but it is also used for DNSBLs, storing subnet masks in RFC 1101, etc.

#### AAAA - IPv6 address record	
Returns a 128-bit IPv6 address, most commonly used to map hostnames to an IP address of the host.

#### CNAME - Canonical name record
Alias of one name to another: the DNS lookup will continue by retrying the lookup with the new name.

#### MX - Mail exchange record
Maps a domain name to a list of message transfer agents for that domain

#### NS - Name server record
Delegates a DNS zone to use the given authoritative name servers

#### PTR - Pointer record
Pointer to a canonical name. Unlike a CNAME, DNS processing stops and just the name is returned. The most common use is for implementing reverse DNS lookups, but other uses include such things as DNS-SD.

#### SOA - Start of Authority record
Specifies authoritative information about a DNS zone, including the primary name server, the email of the domain administrator, the domain serial number, and several timers relating to refreshing the zone.

#### SRV - Service locator
Generalized service location record, used for newer protocols instead of creating protocol-specific records such as MX.

#### TXT - Text Record
Originally for arbitrary human-readable text in a DNS record. Since the early 1990s, however, this record more often carries machine-readable data, such as specified by RFC 1464, opportunistic encryption Sender Policy Framework, DKIM, DMARC, DNS-SD, etc.
