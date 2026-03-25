Deque 

Deque ou Double-Ended Queue, seria uma fila de duas pontas.

É basicamente uma generalização de pilha + fila: você pode inserir e remover elementos tanto no início quanto no final.

Operações fundamentais

| Operação        | Descrição        | Complexidade |
| --------------- | ---------------- | ------------ |
| `push_front(x)` | insere no começo | **O(1)**     |
| `push_back(x)`  | insere no final  | **O(1)**     |
| `pop_front()`   | remove do começo | **O(1)**     |
| `pop_back()`    | remove do final  | **O(1)**     |
| `front()`       | consulta início  | **O(1)**     |
| `back()`        | consulta final   | **O(1)**     |


Relacao com outras estruturas

| Estrutura | Restrições                 |
| --------- | -------------------------- |
| Pilha     | só um lado                 |
| Fila      | entra atrás, sai na frente |
| **Deque** | nenhum lado restrito       |


deque é muito usada em problemas que utilizam Sliding Window (janela deslizante) pois ao instanciar os ponteiros (head e tail), é criado uma espécie de "janela" e ser movida para os lados ao remover ou avancar cada ponteiro

**Deque is heavily used in Sliding Window problems — the head/tail pointers form a "window" that slides by removing/advancing.**

Nos PDFs de teoria, a deque aparece como lista linear sequencial com inclusão nas extremidades e uso de vetor circular.

---

## 🎯 Quando Usar? / When to Use?

### ✅ Use Deque quando:
- **Sliding Window** — expanda/contraia dos dois lados
- Precisa de **Stack + Queue** simultaneamente
- **Monotonic Deque** — manter máximos/mínimos de subarrays
- **Buffer circular** que pode ser expandido dos dois lados

### ❌ Não use Deque quando:
- Só precisa de Stack (use Stack simples)
- Só precisa de Queue (use Queue simples)
- Acesso aleatório é crítico → use Array

## 🔧 Implementações / Implementations

- **Sequencial/circular**: índices de frente e fim em vetor, reaproveitando espaço.
- **Encadeada**: nós com ponteiros para as extremidades.

## 📚 Material Teórico Relacionado

- [5 - Pilhas e filas em alocação sequencial.pdf](5%20-%20Pilhas%20e%20filas%20em%20alocação%20sequencial.pdf)

---

## 📚 Tabela de Exercícios / Exercises

Deque é geralmente usada **como estrutura auxiliar** em técnicas como Sliding Window.

Veja em:
- [algorithms/sliding-window/](../algorithms/sliding-window/) — Monotonic queue com deque

---

## 💡 Padrões Comuns / Common Patterns

### Monotonic Deque (Maximum/Minimum in Subarray)
```python
# Manter índices em deque, removendo do front if out of window
# Removendo do back if elemento maior chega
# Resultado: front do deque é sempre o máximo/mínimo
```

### Sliding Window Template
```python
from collections import deque
dq = deque()

for i in range(len(arr)):
    # Remove elementos fora da janela
    while dq and dq[0][1] <= i - window_size:
        dq.popleft()
    
    # Processa elemento
    # Adiciona resultado
```