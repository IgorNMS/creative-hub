# Scanning the basics

### Banner grabbing

Tecnica usada para obter informação sobre o sistema, O Admin podem usar isso para criar um inventario dos sistemas e serviços rodando em uma rede porém um intruso pode usar a mesma tecnica para encontrar aplicações vulneraveis.

```powershell
Ex: echo "" | nc -v -n -w1 192.168.1.85 80
		(UNKNOWN) [192.168.1.85] 80 (http) open
```

### Tipos de escaneamento

![Untitled](./Scaning%20f12c7a8cd6d542eeba53b1ece27db179/Untitled.png)

### Resultados de um escaneamento

O Nmap nos apresenta 6 tipos de porta, Open, Closed, Filtered, Unfiltered, Open|Filtered, Closed|Filtered.

![Untitled](./Scaning%20f12c7a8cd6d542eeba53b1ece27db179/Untitled%201.png)

Para mais detalhes use a documentação do Nmap como referencia.

### NMAP 101

Uma pequena documentação em ingles apresentando algumas funções do NMAP

[nmap101.pdf](./Scaning%20f12c7a8cd6d542eeba53b1ece27db179/nmap101.pdf)

### Descobrir dispositivos em uma rede com o CMD Windows

No CMD do windows, pode se usar o comando net view /all para listar todos os dispositivos em um workgroup wondows.

Tambem existe o comando arp -a que tambem e usado para buscar dispositivos na rede.

### Descobrir dispositivos em uma rede com NMAP

No kali linux, use o comando ip addr para encontrar o ip da rede interna, no meu exemplo estou usando o kali nethunter, no meu dispositivo android, o retorno que nos interessa e esse:

wlan0: … … … inet 192.168.18.168/24

Onde o /24 e a mascara de subrede e no momento de scanear vamos escanear a subrede 24.

Proximo passo e executar o comando nmap 192.168.18.0/24 para executar o nmap scaneando todos os dispositivos da subrede 24.

Segue exemplo do retorno do scan do nmap no meu Android:

![Screenshot_2023-04-09-12-11-45-944-edit_com.termux.jpg](./Scaning%20f12c7a8cd6d542eeba53b1ece27db179/Screenshot_2023-04-09-12-11-45-944-edit_com.termux.jpg)

No caso específico do meu roteador, a rede cabeada e a rede wi-fi está separada então meu dispositivo windows não está aparecendo, o IP com final .1 e meu roteador e o IP com final .14 e meu servidor de arquivos.

### Descobrir dispositivos em uma rede com ARP-SCAN

No kali tmb temos a opção do arp-scan, que e uma maneira menos verbosa de scanear a rede e o arp-scan não testa por portas abertas como o nmap, para referencia, irei colocar o exemplo da resposta do arp-scan:

![Untitled](./Scaning%20f12c7a8cd6d542eeba53b1ece27db179/Untitled%202.png)

### Detectando firewalls

A parte de detecção de firewalls e importante pois podemos criar formas de fazer um bypass neles.

Por sorte já existe um script no nmap que automatiza essa parte pra gente (cabe estudo sobre criação de scripts no nmap).

Segue exemplo de como nós podemos usar esse script:

```bash
nmap -p80 --script http-waf-detect <host>
```

Existe outro script que vale a pena conhecer também:

```bash
nmap --script=http-waf-fingerprint <targets>
```

Esse último e útil para conhecer o firewall e obter a versão dele.

A parte de scripts do NMAP e muito útil, vale muito a pena conhecer mais sobre.

### Recon-NG

O Recon-NG e uma outra ferramenta de scaning.

Por enquanto vamos documentar o básico, mas cabe estudos mais aprofundados sobre a ferramenta pois e muito útil pra automatizar reconhecimento e ate ataques.

Vamos ao básico do Recon-NG então:

Iniciamos o terminal interativo do Recon-NG, com o comando recon-ng 😶‍🌫️ no terminal do Kali, segue exemplo do retorno:

![Screenshot_2023-04-09-12-34-14-034-edit_com.termux.jpg](./Scaning%20f12c7a8cd6d542eeba53b1ece27db179/Screenshot_2023-04-09-12-34-14-034-edit_com.termux.jpg)

Mais uma vez estou usando meu dispositivo Android pra fazer os testes, esse e o motivo da tela “bugada”, mas os comandos apresentados aki, também funcionam no Kali.

![Screenshot_2023-04-09-14-59-15-763-edit_com.termux.jpg](./Scaning%20f12c7a8cd6d542eeba53b1ece27db179/Screenshot_2023-04-09-14-59-15-763-edit_com.termux.jpg)

Help pra ver todos os comandos do recon-ng.

Dois comandos que estaremos exemplificando e o marketplace e modules.

Digite marketplace search pra buscar todos os módulos pronto pra gente usar.

![Screenshot_2023-04-09-15-03-50-221-edit_com.termux.jpg](./Scaning%20f12c7a8cd6d542eeba53b1ece27db179/Screenshot_2023-04-09-15-03-50-221-edit_com.termux.jpg)

Vamos procurar e baixar o módulo hackertarget

Segue exemplos:

![Screenshot_2023-04-09-15-08-58-945-edit_com.termux.jpg](./Scaning%20f12c7a8cd6d542eeba53b1ece27db179/Screenshot_2023-04-09-15-08-58-945-edit_com.termux.jpg)

![Screenshot_2023-04-09-15-10-12-232-edit_com.termux.jpg](./Scaning%20f12c7a8cd6d542eeba53b1ece27db179/Screenshot_2023-04-09-15-10-12-232-edit_com.termux.jpg)

![Screenshot_2023-04-09-15-12-43-236-edit_com.termux.jpg](./Scaning%20f12c7a8cd6d542eeba53b1ece27db179/Screenshot_2023-04-09-15-12-43-236-edit_com.termux.jpg)

Para confirmar que o módulo está instalado basta digitar o comando modules search.

Para usar o módulo instalado basta digitar:

module load recon/domain-hosts/hackertarget

Segue exemplo:

![Screenshot_2023-04-09-15-16-13-633-edit_com.termux.jpg](./Scaning%20f12c7a8cd6d542eeba53b1ece27db179/Screenshot_2023-04-09-15-16-13-633-edit_com.termux.jpg)

Vamos usar o módulo em um site aleatório como exemplo pra uso.

Iniciamos alterando o parâmetro SOURCE com o comando:

```bash
options set SOURCE loiliangyang.com

E depois executamos o comando "run"
```

Segue exemplo:

![Screenshot_2023-04-09-15-21-48-033-edit_com.termux.jpg](./Scaning%20f12c7a8cd6d542eeba53b1ece27db179/Screenshot_2023-04-09-15-21-48-033-edit_com.termux.jpg)

O módulo hackertarget traz informações bem simples sobre o alvo.

Use back, pra sair do terminal do módulo.

Outro módulo interessante que podemos usar e o “discovery/info_disclosure/interesting_files” segue print da instalação dele.

![Screenshot_2023-04-09-15-25-18-802-edit_com.termux.jpg](./Scaning%20f12c7a8cd6d542eeba53b1ece27db179/Screenshot_2023-04-09-15-25-18-802-edit_com.termux.jpg)

Em seguida exemplos de uso do módulo que acabamos de instalar:

![Screenshot_2023-04-09-15-30-30-049-edit_com.termux.jpg](./Scaning%20f12c7a8cd6d542eeba53b1ece27db179/Screenshot_2023-04-09-15-30-30-049-edit_com.termux.jpg)

Mesmo esquema do último script, setamos o alvo e executamos com o run.

Nesse exemplo, conseguimos a informação do robots.txt, que pode nos trazer informações valiosas sobre o site que estamos analisando, como página de administração e etc.

Essa foi so uma apresentação do Recon-NG e seus 2 modulos mais populares, vale a pena gastar alguns dias conhecendo a ferramenta como um todo.

### Maltego

Maltego e outra ferramenta de scaning, bem mais grafica que as outras apresentadas, essa ferramenta e meio complicada de usar no celular, não e impossivel, so mais chatinha de configurar.

Segue os prints para referencia:

![Untitled](./Scaning%20f12c7a8cd6d542eeba53b1ece27db179/Untitled%203.png)

Essa e a tela de um grafico de entidades em branco, do lado esquerdo tem a paleta de entidades e do lado direito os detalhes e propriedades dela.

Entidades, como o nome sugere são entidades que estão sendo analisadas pelo maltego, podem ser portas de hosts, ips v4 e v6, websites, dns e etc..

No exemplo a seguir eu utilizei a entidade de website:

![Untitled](./Scaning%20f12c7a8cd6d542eeba53b1ece27db179/Untitled%204.png)

basta alterar o endereço do website para utilizar os transforms do maltego, transforms são uma junção de funções que buscam informações sobre determinado alvo e nos apresenta no grafico.

Segue exemplo:

![Untitled](./Scaning%20f12c7a8cd6d542eeba53b1ece27db179/Untitled%205.png)

Existe uma infinidade de transforms, mesmo na versão Community do maltego, então vou registrar algum pra ficar de exemplo.

![Untitled](./Scaning%20f12c7a8cd6d542eeba53b1ece27db179/Untitled%206.png)

No print acima eu executei o transform que busca endereços de emails associados ao website analisado, ele trouxe todos os emails de forma grafica, pra facilitar na analise do alvo.