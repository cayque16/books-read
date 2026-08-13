# Minhas Leituras

## Motivação

Adquiri o hábito da leitura ainda no ensino fundamental, estava sempre com um livro da biblioteca da escola em mãos. Durante a vida adulta esse hábito foi sendo engolido e deixado de lado, era comum eu demorar meses pra ler um único livro, parece irônico, mas a solução veio após a leitura do livro **O Poder do Hábito**. Coloquei uma meta diária de leitura que me permitisse ler um livro em 20 dias, o _Kindle_ foi um grande aliado, uma vez que ele exibe o percentual do livro atual. A cabeça de programador entrou em cena e tive a ideia de criar um relatório de cada livro, com base na data de início da leitura, em qual percentual eu deveria estar a cada dia.

## A Ideia

A lógica por traz da ideia era gerar uma tabela com os percentuias com base na da inicial:
|||||
|---|---|---|---|
06/01/2026: 05% | 07/01/2026: 10% | 08/01/2026: 15% | 09/01/2026: 20%
10/01/2026: 25% | 11/01/2026: 30% | 12/01/2026: 35% | 13/01/2026: 40%
14/01/2026: 45% | 15/01/2026: 50% | 16/01/2026: 55% | 17/01/2026: 60%
18/01/2026: 65% | 19/01/2026: 70% | 20/01/2026: 75% | 21/01/2026: 80%
22/01/2026: 85% | 23/01/2026: 90% | 24/01/2026: 95% | 25/01/2026: 100%

O código foi feito em _Python_, pois era uma linguagem que eu estava aprendendo na época.
As tabelas eram geradas em um arquivo _txt_ e salvas no próprio repositório: [livros](https://github.com/cayque16/Projetos-em-Python/tree/master/datas-de-leitura/livros)

Esse repositório aqui surgiu durante os meus estudos em _Vue_, adaptei o código citado
anteriormente para gerar um histórico de todos os livros em _JSON_ e alimentar o sistema atual.

### Melhorias e Novas Funções

Atualmente cada novo plano de leitura ainda precisa ser gerado através do [sistema original](https://github.com/cayque16/Projetos-em-Python/tree/master/datas-de-leitura), com o comando `python datas_de_leitura`, o que alimenta o [histórico geral](https://raw.githubusercontent.com/cayque16/Projetos-em-Python/refs/heads/master/datas-de-leitura/livros/historico-geral.json), um processo lento e pouco produtivo.
Como melhoria futura, esse processo deve ser absorvido por esse projeto atual.
