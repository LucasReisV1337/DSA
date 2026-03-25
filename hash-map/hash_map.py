"""
Hash Map (Hash Table / Dictionary) - Tabela Hash

Uma HashMap (tabela hash) armazena pares chave:valor e permite
busca, inserção e remoção em tempo O(1) em média.

Implementação usando:
1. Hash Function: transforma chave em índice
2. Collision Handling: resolve colisões (encadeamento)

Operações principais:
- put(key, value): insere/atualiza - O(1) média, O(n) pior
- get(key): busca valor - O(1) média, O(n) pior
- remove(key): remove - O(1) média, O(n) pior
- containsKey(key): verifica existência - O(1) média, O(n) pior
- size(): número de pares - O(1)

Casos de uso:
- Cache, memoization
- Contagem de frequências
- Busca de elementos únicos
- Implementação de dicionários
"""


class HashMap:
    """
    Implementação de HashMap com encadeamento para resolver colisões.
    
    Usa encadeamento (chaining): cada célula da tabela aponta para
    uma lista de pares chave:valor que compartilham o mesmo hash.
    """
    
    def __init__(self, capacity=16):
        """
        Inicializa HashMap com capacidade inicial.
        
        Args:
            capacity: Tamanho inicial da tabela (padrão: 16)
        """
        self.capacity = capacity
        self.size = 0
        self.table = [[] for _ in range(capacity)]  # Listas para encadeamento
    
    def _hash_function(self, key):
        """
        Função hash simples que transforma chave em índice.
        
        Complexidade: O(1) para tipos primitivos, O(len(key)) para strings
        """
        return hash(key) % self.capacity
    
    def put(self, key, value):
        """
        Insere ou atualiza um par chave:valor.
        
        Complexidade: O(1) média, O(n) pior caso (muitas colisões)
        
        Args:
            key: Chave (deve ser hashable)
            value: Valor associado à chave
        """
        index = self._hash_function(key)
        bucket = self.table[index]  # Lista de colisões
        
        # Procura se a chave já existe
        for i, (k, v) in enumerate(bucket):
            if k == key:
                # Atualiza valor existente
                bucket[i] = (key, value)
                return
        
        # Chave não encontrada, adiciona novo par
        bucket.append((key, value))
        self.size += 1
        
        # Redimensiona se fator de carga > 0.75
        if self.size / self.capacity > 0.75:
            self._resize()
    
    def get(self, key, default=None):
        """
        Busca o valor associado a uma chave.
        
        Complexidade: O(1) média, O(n) pior caso
        
        Args:
            key: Chave a buscar
            default: Valor padrão se não encontrado
            
        Returns:
            Valor associado à chave ou default
        """
        index = self._hash_function(key)
        bucket = self.table[index]
        
        for k, v in bucket:
            if k == key:
                return v
        
        return default
    
    def remove(self, key):
        """
        Remove um par chave:valor.
        
        Complexidade: O(1) média, O(n) pior caso
        
        Args:
            key: Chave a remover
            
        Returns:
            Valor removido ou None se não encontrado
        """
        index = self._hash_function(key)
        bucket = self.table[index]
        
        for i, (k, v) in enumerate(bucket):
            if k == key:
                bucket.pop(i)
                self.size -= 1
                return v
        
        return None
    
    def contains_key(self, key):
        """
        Verifica se uma chave existe.
        
        Complexidade: O(1) média, O(n) pior caso
        """
        index = self._hash_function(key)
        bucket = self.table[index]
        
        for k, _ in bucket:
            if k == key:
                return True
        
        return False
    
    def keys(self):
        """Retorna lista de todas as chaves."""
        result = []
        for bucket in self.table:
            for k, _ in bucket:
                result.append(k)
        return result
    
    def values(self):
        """Retorna lista de todos os valores."""
        result = []
        for bucket in self.table:
            for _, v in bucket:
                result.append(v)
        return result
    
    def items(self):
        """Retorna lista de todos os pares (chave, valor)."""
        result = []
        for bucket in self.table:
            for k, v in bucket:
                result.append((k, v))
        return result
    
    def _resize(self):
        """
        Redimensiona a tabela quando fator de carga é alto.
        
        Complexidade: O(n)
        """
        old_table = self.table
        self.capacity *= 2
        self.table = [[] for _ in range(self.capacity)]
        self.size = 0
        
        # Re-insere todos os elementos na nova tabela
        for bucket in old_table:
            for k, v in bucket:
                self.put(k, v)
    
    def get_load_factor(self):
        """Retorna o fator de carga (ocupação)."""
        return self.size / self.capacity
    
    def get_capacity(self):
        """Retorna a capacidade atual."""
        return self.capacity
    
    def get_size(self):
        """Retorna o número de elementos."""
        return self.size
    
    def __str__(self):
        """Representação em string."""
        items = self.items()
        return f"HashMap({{{', '.join(f'{k}: {v}' for k, v in items)}}})"
    
    def __repr__(self):
        return self.__str__()
    
    def __getitem__(self, key):
        """Permite acesso com map[key]."""
        return self.get(key)
    
    def __setitem__(self, key, value):
        """Permite atribuição com map[key] = value."""
        self.put(key, value)
    
    def __contains__(self, key):
        """Permite verificação com 'key in map'."""
        return self.contains_key(key)


# ============================================================================
# EXEMPLO DE USO
# ============================================================================

if __name__ == "__main__":
    print("=" * 60)
    print("HASH MAP (HASH TABLE / DICTIONARY)")
    print("=" * 60)
    
    # 1. Operações básicas
    print("\n1. OPERAÇÕES BÁSICAS:")
    hm = HashMap()
    
    print("\n   Inserindo pares chave:valor:")
    pares = [("name", "Alice"), ("age", 30), ("city", "São Paulo"), ("country", "Brasil")]
    for chave, valor in pares:
        hm.put(chave, valor)
        print(f"   put('{chave}', '{valor}')")
    
    print(f"\n   HashMap: {hm}")
    print(f"   Tamanho: {hm.get_size()}")
    print(f"   Capacidade: {hm.get_capacity()}")
    print(f"   Fator de carga: {hm.get_load_factor():.2%}")
    
    print("\n   Buscando valores:")
    print(f"   get('name') → {hm.get('name')}")
    print(f"   get('age') → {hm.get('age')}")
    print(f"   get('unknown') → {hm.get('unknown', 'NOT FOUND')}")
    
    # 2. Atualização
    print("\n" + "=" * 60)
    print("2. ATUALIZANDO VALORES:")
    print("=" * 60)
    
    print("\n   Antes: age = ", hm.get('age'))
    hm.put('age', 31)
    print("   put('age', 31)")
    print("   Depois: age = ", hm.get('age'))
    
    # 3. Verificação de existência
    print("\n" + "=" * 60)
    print("3. VERIFICANDO EXISTÊNCIA DE CHAVE:")
    print("=" * 60)
    
    print(f"\n   'name' em hm? {hm.contains_key('name')}")
    print(f"   'email' em hm? {hm.contains_key('email')}")
    print(f"   Usando 'in': 'city' in hm? {'city' in hm}")
    
    # 4. Remoção
    print("\n" + "=" * 60)
    print("4. REMOVENDO ELEMENTOS:")
    print("=" * 60)
    
    print("\n   Antes: ", hm)
    print("   Removendo 'country'...")
    removido = hm.remove('country')
    print(f"   Removido: '{removido}'")
    print("   Depois: ", hm)
    
    # 5. Iteração
    print("\n" + "=" * 60)
    print("5. ITERAÇÃO SOBRE ELEMENTOS:")
    print("=" * 60)
    
    print("\n   Todas as chaves:", hm.keys())
    print("   Todos os valores:", hm.values())
    print("   Todos os pares:")
    for chave, valor in hm.items():
        print(f"      {chave}: {valor}")
    
    # 6. Contagem de frequências (caso de uso comum)
    print("\n" + "=" * 60)
    print("6. CASO DE USO: CONTAGEM DE FREQUÊNCIAS")
    print("=" * 60)
    
    texto = "abracadabra"
    freq = HashMap()
    
    print(f"\n   Texto: '{texto}'")
    print("   Contando frequência de cada caractere:")
    
    for char in texto:
        freq.put(char, freq.get(char, 0) + 1)
    
    print(f"\n   Frequências:")
    for char, count in sorted(freq.items()):
        print(f"      '{char}': {count}")
    
    print(f"\n   Total de caracteres únicos: {freq.get_size()}")
    
    # 7. Two Sum (encontrar par com soma alvo)
    print("\n" + "=" * 60)
    print("7. CASO DE USO: TWO SUM")
    print("=" * 60)
    
    arr = [2, 7, 11, 15]
    target = 9
    print(f"\n   Array: {arr}")
    print(f"   Alvo (target): {target}")
    print("   Encontrar dois números que somem ao alvo:")
    
    seen = HashMap()
    for num in arr:
        complement = target - num
        if seen.contains_key(complement):
            print(f"   ✓ Encontrado! {complement} + {num} = {target}")
            break
        seen.put(num, True)
    
    # 8. Performance note
    print("\n" + "=" * 60)
    print("8. NOTAS SOBRE PERFORMANCE:")
    print("=" * 60)
    
    import time
    
    # HashMap
    hm_perf = HashMap()
    start = time.time()
    for i in range(1000):
        hm_perf.put(i, i * 2)
    for i in range(1000):
        hm_perf.get(i)
    hm_time = time.time() - start
    
    # List (comparação)
    lst = []
    start = time.time()
    for i in range(1000):
        lst.append((i, i * 2))
    for i in range(1000):
        for k, v in lst:
            if k == i:
                break
    list_time = time.time() - start
    
    print(f"\n   HashMap (1000 puts + gets): {hm_time:.6f}s")
    print(f"   List (1000 appends + searches): {list_time:.6f}s")
    print(f"   Speedup: {list_time / hm_time:.1f}x mais rápido com HashMap")
